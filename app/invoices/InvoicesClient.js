'use client'; 

import React, { useState, useEffect, useMemo, useCallback } from 'react';
// Using Lucide-React for modern, clean icons (Assuming you have them installed)
import { Plus, List, Save, X, Search, Check, X as XIcon } from 'lucide-react'; 

// --- Initial Invoice Structure and Types ---
/**
 * @typedef {object} Invoice
 * @property {number} id
 * @property {string | null} date
 * @property {string} title
 * @property {number} amount
 * @property {string | undefined} store_name
 * @property {string | undefined} description
 * @property {string} type
 * @property {string} category
 * @property {boolean} has_receipt
 * @property {boolean} has_invoice
 */

const initialFormState = {
  date: '', title: '', description: '', amount: '', 
  store_name: '', type: 'expense', category: 'General', 
  has_receipt: false, has_invoice: false,
};

// --- Component ---
/**
 * @param {{ initialInvoices: Invoice[] }} props 
 */
export default function InvoicesClient({ initialInvoices }) {
  // --- 1. State Management ---
  // The actual list is now managed by state, initialized from props
  const [invoicesList, setInvoicesList] = useState(initialInvoices || []);
  const [formData, setFormData] = useState(initialFormState);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

  // 2. Filter States (retained from your file)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [receiptStatus, setReceiptStatus] = useState('all');
  const [invoiceStatus, setInvoiceStatus] = useState('all');
  
  // --- 3. DATA FETCHING FUNCTION (CRITICAL for Refresh) ---
  const fetchInvoices = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // API path needs to be absolute or relative to the root
      const response = await fetch('/api/invoices'); 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      
      // IMPORTANT: Update the component's state with the fresh data
      if (data && data.invoices) {
        setInvoicesList(data.invoices);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load invoices from server.");
    } finally {
      setLoading(false);
    }
  }, []);

  // --- Initial Load Effect ---
  // This runs once to ensure the list is populated or re-fetched if props were empty
  useEffect(() => {
    if (!initialInvoices || initialInvoices.length === 0) {
      fetchInvoices();
    }
  }, [fetchInvoices, initialInvoices]);
  
  // --- 4. FORM HANDLERS ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 💥 FIX: CALL REFRESH HERE TO GET THE NEW DATA
        await fetchInvoices(); 
        
        setFormData(initialFormState);
        setIsFormVisible(false); // Hide the form on success
        // Could add a temporary success message state here
      } else {
        const errorData = await response.json();
        setError(`Failed to save invoice: ${errorData.message || response.statusText}`);
      }
    } catch (err) {
      setError("Network error during save. Check console for details.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  // 5. Filtering Logic (Adapted to use invoicesList state)
  const { uniqueCategories, uniqueTypes, filteredInvoices } = useMemo(() => {
    const categories = new Set(['همه دسته ها']);
    const types = new Set(['همه انواع']); 
    
    invoicesList.forEach(invoice => {
        categories.add(invoice.category);
        types.add(invoice.type);
    });

    let result = invoicesList;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    // Apply filters
    if (searchTerm) {
         result = result.filter(invoice => 
            (invoice.date && invoice.date.includes(lowerCaseSearchTerm)) ||
            invoice.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            (invoice.store_name?.toLowerCase().includes(lowerCaseSearchTerm))
        );
    }
    if (selectedCategory !== 'all' && selectedCategory !== 'همه دسته ها') {
        result = result.filter(invoice => invoice.category === selectedCategory);
    }
    if (selectedType !== 'all' && selectedType !== 'همه انواع') {
        result = result.filter(invoice => invoice.type === selectedType);
    }
    if (receiptStatus === 'yes') {
        result = result.filter(invoice => invoice.has_receipt === true);
    } else if (receiptStatus === 'no') {
        result = result.filter(invoice => invoice.has_receipt === false);
    }
    if (invoiceStatus === 'yes') {
        result = result.filter(invoice => invoice.has_invoice === true);
    } else if (invoiceStatus === 'no') {
        result = result.filter(invoice => invoice.has_invoice === false);
    }
    
    // Client-Side Sorting (Newest first)
    result.sort((a, b) => {
        const dateA = a.date || '0000/01/01'; 
        const dateB = b.date || '0000/01/01'; 
        if (dateA < dateB) return 1; 
        if (dateA > dateB) return -1;  
        return 0; 
    });

    return {
        uniqueCategories: Array.from(categories),
        uniqueTypes: Array.from(types),
        filteredInvoices: result
    };
  }, [invoicesList, searchTerm, selectedCategory, selectedType, receiptStatus, invoiceStatus]); 


  // --- Rendering Helpers ---
  const toggleDescription = (id) => {
    setExpandedDescriptionId(expandedDescriptionId === id ? null : id);
  };

  const getAmountClass = (type) => 
    type === 'income' ? 'text-green-600 font-bold' : 'text-red-600 font-bold';

  const getStatusIcon = (status) => status ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <XIcon className="w-5 h-5 text-red-500 mx-auto" />;
  
  const formatAmount = (amount) => 
    amount ? Number(amount).toLocaleString('fa-IR') : '0';


  return (
    <div className="mx-auto p-6 max-w-5xl font-['Tahoma', 'sans-serif'] bg-gray-50 shadow-2xl rounded-xl mt-10 text-right">
      
      {/* HEADER CONTAINER and PLUS BUTTON */}
      <div className="flex justify-between items-center mb-6 border-b-2 pb-3 border-gray-200">
        <h2 className="text-3xl font-extrabold text-green-700 ml-auto pr-4">
          لیست فاکتورها
        </h2>
        <button 
          onClick={() => setIsFormVisible(true)} // Open modal instead of navigating
          className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition duration-200"
          title="افزودن فاکتور جدید"
        >
            <Plus className="w-6 h-6" />
        </button>
      </div>
      
      {/* --- Filter & Action Row --- */}
      <div className="mb-6 space-y-4 md:space-y-0 md:flex md:gap-4 flex-wrap">
        
        {/* Search Input */}
        <div className="flex items-center relative flex-grow min-w-[200px]">
            <input 
                type="text" 
                placeholder="جستجو بر اساس تاریخ، عنوان یا فروشگاه..." 
                className="w-full p-2 border border-gray-300 rounded-lg pr-10 text-right focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="w-5 h-5 text-gray-400 absolute right-3" />
        </div>
        
        {/* Category and Type Selects */}
        <select 
            className="p-2 border border-gray-300 rounded-lg min-w-[150px] text-right focus:ring-blue-500 focus:border-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
        >
            <option value="all">همه دسته ها</option>
            {uniqueCategories.filter(c => c !== 'همه دسته ها').map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        
        <select 
            className="p-2 border border-gray-300 rounded-lg min-w-[150px] text-right focus:ring-blue-500 focus:border-blue-500"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
        >
            <option value="all">همه انواع</option>
            {uniqueTypes.filter(t => t !== 'همه انواع').map(type => (
                <option key={type} value={type}>{type}</option>
            ))}
        </select>

        {/* Manual Refresh Button */}
        <button
            onClick={fetchInvoices}
            disabled={loading}
            className="flex items-center bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg shadow-md transition duration-200 disabled:opacity-50 hover:bg-gray-300"
          >
          <List className="w-5 h-5 ml-2" />
          {loading ? 'بارگذاری...' : 'به‌روزرسانی'}
        </button>
      </div>

      {/* Row 2: Status Toggle Buttons (Grouped) */}
      <div className="flex flex-wrap gap-4 mb-6 justify-start">
          
          {/* Receipt Filters */}
          <div className="flex rounded-lg overflow-hidden border border-gray-300 shadow-sm">
              <span className="p-2 bg-gray-100 text-gray-600 font-medium text-sm">رسید:</span>
              <button 
                  className={`px-3 py-2 text-sm transition-colors ${receiptStatus === 'all' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                  onClick={() => setReceiptStatus('all')}
              >
                  همه
              </button>
              <button 
                  className={`px-3 py-2 text-sm transition-colors flex items-center gap-1 ${receiptStatus === 'yes' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                  onClick={() => setReceiptStatus('yes')}
              >
                  <Check className="w-4 h-4" /> دارای
              </button>
              <button 
                  className={`px-3 py-2 text-sm transition-colors flex items-center gap-1 ${receiptStatus === 'no' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                  onClick={() => setReceiptStatus('no')}
              >
                  <XIcon className="w-4 h-4" /> فاقد
              </button>
          </div>

          {/* Invoice Filters */}
          <div className="flex rounded-lg overflow-hidden border border-gray-300 shadow-sm">
              <span className="p-2 bg-gray-100 text-gray-600 font-medium text-sm">فاکتور:</span>
              <button 
                  className={`px-3 py-2 text-sm transition-colors ${invoiceStatus === 'all' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                  onClick={() => setInvoiceStatus('all')}
              >
                  همه
              </button>
              <button 
                  className={`px-3 py-2 text-sm transition-colors flex items-center gap-1 ${invoiceStatus === 'yes' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                  onClick={() => setInvoiceStatus('yes')}
              >
                  <Check className="w-4 h-4" /> دارای
              </button>
              <button 
                  className={`px-3 py-2 text-sm transition-colors flex items-center gap-1 ${invoiceStatus === 'no' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                  onClick={() => setInvoiceStatus('no')}
              >
                  <XIcon className="w-4 h-4" /> فاقد
              </button>
          </div>
      </div>
      

      {/* --- Invoice List Table --- */}
      {loading && <p className="text-center text-blue-600 p-4">درحال بارگذاری لیست...</p>}
      {error && <p className="text-center text-red-500 bg-red-100 p-3 rounded-lg">{error}</p>}
      
      {!loading && filteredInvoices.length === 0 ? (
          <p className="text-center text-gray-500 p-8 text-lg bg-white rounded-lg shadow-inner">
            {invoicesList.length > 0 ? 'هیچ فاکتوری با فیلترهای اعمال شده یافت نشد.' : 'هیچ فاکتوری برای نمایش وجود ندارد.'}
          </p>
      ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-100">
              <table className="min-w-full border-collapse text-sm text-center rtl">
                  <thead className="bg-green-600 text-white sticky top-0">
                      <tr>
                          <th className="p-3 whitespace-nowrap border-b border-gray-200">تاریخ</th> 
                          <th className="p-3 whitespace-nowrap border-b border-gray-200">نام فروشگاه</th>
                          <th className="p-3 whitespace-nowrap border-b border-gray-200">عنوان</th>
                          <th className="p-3 whitespace-nowrap border-b border-gray-200">مبلغ (تومان)</th>
                          <th className="p-3 whitespace-nowrap border-b border-gray-200">نوع</th>
                          <th className="p-3 whitespace-nowrap border-b border-gray-200">دسته</th>
                          <th className="p-3 whitespace-nowrap border-b border-gray-200">توضیحات</th> 
                          <th className="p-3 border-b border-gray-200">رسید</th>
                          <th className="p-3 border-b border-gray-200">فاکتور</th>
                      </tr>
                  </thead>
                  <tbody>
                      {filteredInvoices.map((invoice) => {
                          const isExpanded = expandedDescriptionId === invoice.id;
                          const description = invoice.description || '---';
                          const needsTruncation = description.length > 30 && !isExpanded;

                          return (
                              <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50 transition duration-100">
                                  <td className="p-3 whitespace-nowrap">{invoice.date}</td> 
                                  <td className="p-3 whitespace-nowrap">{invoice.store_name || 'N/A'}</td>
                                  <td className="p-3 whitespace-nowrap">{invoice.title}</td>
                                  <td className={`p-3 whitespace-nowrap ${getAmountClass(invoice.type)}`}>
                                    {formatAmount(invoice.amount)}
                                  </td>
                                  <td className="p-3 whitespace-nowrap">{invoice.type === 'income' ? 'درآمد' : 'هزینه'}</td>
                                  <td className="p-3 whitespace-nowrap">{invoice.category}</td>
                                  
                                  <td 
                                      className="p-3 align-top max-w-[150px] relative text-sm cursor-pointer"
                                      onClick={() => toggleDescription(invoice.id)} 
                                  >
                                      <div 
                                          className={`relative inline-block p-1 rounded transition-all duration-300 ${isExpanded ? 'bg-yellow-50 shadow-md z-10 whitespace-normal max-w-xs text-right' : 'truncate whitespace-nowrap max-w-full'}`}
                                          style={isExpanded ? { position: 'absolute', right: '50%', transform: 'translateX(50%)', minWidth: '250px' } : {}}
                                      >
                                          {description}
                                      </div>
                                      {needsTruncation && (
                                          <span className="text-gray-400 text-xs mr-1 whitespace-nowrap">
                                              ... (بیشتر)
                                          </span>
                                      )}
                                  </td>
                                  
                                  <td className="p-3">{getStatusIcon(invoice.has_receipt)}</td>
                                  <td className="p-3">{getStatusIcon(invoice.has_invoice)}</td>
                              </tr>
                          );
                      })}
                  </tbody>
              </table>
          </div>
      )}

      {/* --- Form Modal/Overlay --- */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center p-4">
          <form 
            onSubmit={handleSubmit} 
            className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg relative"
          >
            <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-700">فاکتور جدید</h2>
            
            <button
              type="button"
              onClick={() => setIsFormVisible(false)}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 p-1"
            >
              <X className="w-6 h-6" />
            </button>

            {error && <p className="text-red-500 mb-4 bg-red-100 p-2 rounded-lg">{error}</p>}
            
            <div className="space-y-4">
                {/* Date Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">تاریخ (میلادی - YYYY-MM-DD)</label>
                    <input 
                      type="date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange} 
                      required 
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-left"
                    />
                </div>

                {/* Title and Amount */}
                <div className="flex space-x-4 rtl:space-x-reverse">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">عنوان</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">مبلغ (ریال/تومان)</label>
                        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-left" />
                    </div>
                </div>

                {/* Type (Income/Expense) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">نوع</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-right">
                      <option value="expense">هزینه</option>
                      <option value="income">درآمد</option>
                    </select>
                </div>
                
                {/* Description and Store Name */}
                <div className="flex space-x-4 rtl:space-x-reverse">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">نام فروشگاه</label>
                        <input type="text" name="store_name" value={formData.store_name} onChange={handleChange} className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">دسته بندی</label>
                         <input type="text" name="category" value={formData.category} onChange={handleChange} className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>

                
                {/* Checkboxes */}
                <div className="flex space-x-6 pt-2 justify-start">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                        <input 
                          type="checkbox" 
                          name="has_receipt" 
                          checked={formData.has_receipt} 
                          onChange={handleChange} 
                          className="rounded text-blue-600 focus:ring-blue-500 ml-2 h-4 w-4"
                        />
                        رسید دارد؟
                    </label>
                    <label className="flex items-center text-sm font-medium text-gray-700">
                        <input 
                          type="checkbox" 
                          name="has_invoice" 
                          checked={formData.has_invoice} 
                          onChange={handleChange} 
                          className="rounded text-blue-600 focus:ring-blue-500 ml-2 h-4 w-4"
                        />
                        فاکتور دارد؟
                    </label>
                </div>

                 {/* Description Textarea */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">توضیحات تکمیلی</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows="2" className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 resize-none"></textarea>
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition duration-200 disabled:opacity-50"
              >
                <Save className="w-5 h-5 ml-2" />
                {loading ? 'درحال ذخیره‌سازی...' : 'ذخیره فاکتور'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
