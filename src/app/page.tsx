import InvoiceHeader from "./components/invoices/InvoiceHeader";
import EmptyInvoicePage from "./invoices/empty-invoice";

export default function Home() {
  return (
    <main>
      <InvoiceHeader />
      <EmptyInvoicePage />
    </main>
  );
}
