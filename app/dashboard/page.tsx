import { fetchLatestInvoices, fetchRevenue } from "../lib/data";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { RevenueChartSkeleton } from "../ui/skeletons";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { Suspense } from "react";

export default async function Page () {
    

    const lastestInvoices = await fetchLatestInvoices()
    
    return (

        <div className="flex">
            <Suspense fallback={<RevenueChartSkeleton/>}>
                <RevenueChart/>
            </Suspense>
            <LatestInvoices latestInvoices={lastestInvoices}/>
        </div>
    )
}