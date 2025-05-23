import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'Customers',
};


export default async function Page(
    props: {
        searchParams?: Promise<{
            query?: string;
            page?: string;
        }>;
    }
) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const customersList = await fetchFilteredCustomers(query);

    return <>
        <CustomersTable customers={customersList} query={query} />
    </>;
}