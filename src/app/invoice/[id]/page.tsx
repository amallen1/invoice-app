"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import data from "../../data.json";
import Status from "@/app/components/Status";

interface InvoiceItem {
  id: string;
  status: string;
  description: string;
  senderAddress: object;
  clientName: string;
  clientEmail: string;
  clientAddress: object;
}

const Page = () => {
  const { id } = useParams();

  const {
    id: invoiceID,
    status: paymentStatus,
    description: desc,
    senderAddress: senderAddr,
    clientName,
    clientEmail,
    clientAddress: clientAddr,
    ...otherProperties
  } = data?.find((item) => item.id === id) || {};
  // console.log(invoiceData);
  // console.log(otherProperties);

  return (
    <div className="text-primary">
      <Link href="/" className="relative flex items-center gap-5 mb-8">
        <Image
          src="/icon-arrow-left.svg"
          width={8}
          height={4}
          alt="Left arrow"
          className=""
        />
        <span className="text-sm_variant">Go back</span>
      </Link>

      <div className="bg-invoiceCard rounded-lg p-6 mb-4 flex justify-between items-center">
        <p className="text-invoiceContent text-body">Status</p>
        <Status status={paymentStatus ?? "Pending"} />
      </div>

      <div className="p-6 bg-invoiceCard">
        <div className="mb-8">
          <div className="mb-8 md:flex md:justify-between">
            <div className="mb-8">
              <p className="text-sm_variant mb-1">
                <span className="text-mediumBlue">#</span>
                {invoiceID}
              </p>
              <p className="text-invoiceContent text-body">{desc}</p>
            </div>

            <div className="text-invoiceContent text-body md:text-right">
              <p>{senderAddr?.street}</p>
              <p>{senderAddr?.city}</p>
              <p>{senderAddr?.postCode}</p>
              <p>{senderAddr?.country}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <div className="mb-8">
                <label className="block mb-3">Invoice Date</label>
                <p className="text-sm leading-5">21 Aug 2021</p>
              </div>
              <div>
                <label className="block mb-3">Payment Due</label>
                <p className="text-sm leading-5">20 Sep 2021</p>
              </div>
            </div>

            <div className="text-invoiceContent text-body flex-1 ml-6">
              <label className="block mb-3">Bill To</label>
              <p className="text-sm_variant leading-5 text-primary mb-3">
                {clientName}
              </p>
              <p>{clientAddr?.street}</p>
              <p>{clientAddr?.city}</p>
              <p>{clientAddr?.postCode}</p>
              <p>{clientAddr?.country}</p>
            </div>
            <div className="w-full">
              <label className="block mb-3">Sent to</label>
              <p className="text-sm leading-5">{clientEmail}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-addItem rounded-t-lg p-6">
            <div>
              <div>
                <p>Banner Design</p>
                <span className="text-invoiceContent">&euro;</span>
              </div>

              <div>
                <p>E 156.00</p>
              </div>
            </div>
            <table className="hidden md:block">
              <tbody>
                <tr>
                  <th>Item Name</th>
                  <th>QTY.</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <th>Banner Design</th>
                  <th>1</th>
                  <th>156</th>
                  <th>150</th>
                </tr>
                <tr>
                  <th>Email Design</th>
                  <th>2</th>
                  <th>200.00</th>
                  <th>400</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue dark:bg-almostBlack rounded-b-lg p-6">
            <p>Amount due</p>
            <p>dollar amount</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
