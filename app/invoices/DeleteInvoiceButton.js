// app/invoices/DeleteInvoiceButton.js

'use client';
import { useRouter } from 'next/navigation';
import { deleteInvoice } from '@/lib/actions'; // Adjust path if necessary
import React from 'react';

// You might need to adjust the path to the deleteInvoice action if you used a different file structure.

export default function DeleteInvoiceButton({ invoiceId, onDeleteSuccess}) {
    const router = useRouter();
    // Server action to delete the invoice by ID
    const handleDelete = async () => {
        // 1. Confirmation Dialog
        const confirmed = window.confirm('آیا مطمئن هستید که می‌خواهید این فاکتور را حذف کنید؟ این عمل برگشت‌ناپذیر است.');
        
        if (!confirmed) {
            return; // Stop if user cancels
        }

        // 2. Execute the Server Action
        const result = await deleteInvoice(invoiceId);

        if (result.success) {
            if (onDeleteSuccess) {
                onDeleteSuccess();
            }
            // Optional: Show a subtle success message if needed, but revalidatePath handles the UI update
            console.log(result.message);
        } else {
            alert(result.message); // Show error message
        }
    };

    return (
        <button
            onClick={handleDelete}
            style={styles.deleteButton}
            title="حذف فاکتور"
        >
            ❌
        </button>
    );
}

// Simple internal styles for the button (you can move this to a shared CSS file)
const styles = {
    deleteButton: {
        backgroundColor: '#f44336', // Red color
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '5px 10px',
        cursor: 'pointer',
        fontSize: '0.8em',
        marginLeft: '5px',
        whiteSpace: 'nowrap',
    },
};