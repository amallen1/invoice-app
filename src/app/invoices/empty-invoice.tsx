import React from 'react'
import Image from 'next/image'

const EmptyInvoicePage = () => {
  return (
    <div className="text-center m-auto max-w-[206px]">
      <div className="mb-10">
        <Image
          src="illustration-empty.svg"
          width="193"
          height="160"
          alt="No invoices image"
          className="m-auto"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 tracking-[-0.75px] text-primary">
          There is nothing here
        </h2>
        <p className="text-sm leading-4 text-secondary">
          Create an invoice by clicking the
          <span className="font-bold">New</span> button and get started
        </p>
      </div>
    </div>
  )
}

export default EmptyInvoicePage