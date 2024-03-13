import InvoiceHeader from "./components/Invoices/InvoiceHeader";
import InvoiceList from "./components/Invoices/InvoiceList";

export default function Home() {
  return (
    <main>
      <div className="pt-8 px-6 md:pt-[60px] md:px-12 lg:pt-[71px] lg:px-40 xl:px-64">
        <div className="m-auto max-w-[730px]">
          <InvoiceHeader />
          <InvoiceList />
        </div>
      </div>
    </main>
  );
}
