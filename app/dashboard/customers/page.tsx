import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'Customers',
};


export default async function Page() {
    const customersList = await fetchFilteredCustomers('');

    return <>
        <CustomersTable customers={customersList} />
    </>;
}