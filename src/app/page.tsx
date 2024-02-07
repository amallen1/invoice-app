import InvoiceHeader from "./components/Invoices/InvoiceHeader";
import NoInvoices from "./components/Invoices/NoInvoices";

export default function Home() {
  return (
    <main>
      <div className="pt-8 px-6 md:pt-[60px] md:px-12 lg:pt-[71px] lg:px-40 xl:px-64">
        <InvoiceHeader />
        {/* TODO: if there is at least one invoice render the list of invoices
      otherwise, render NoInvoices component */}
        <NoInvoices />
      </div>
    </main>
  );
}
