import React from 'react'

const Status = ({ status }: { status: string | undefined }) => {
  return (
    <div
        className={`p-3 w-[104px] text-center rounded-md ${
          status === "pending"
            ? "bg-paleOrange"
            : status === "paid"
            ? "bg-paleGreen"
            : "bg-paleBlue dark:bg-[#9797970f]"
        }`}
      >
        <p
          className={`text-sm_variant flex items-center justify-center gap-2 ${
            status === "pending"
              ? "text-orange"
              : status === "paid"
              ? "text-green"
              : "text-blue dark:text-lightBlue"
          }`}
        >
          <span
            className={`w-2 h-2 block rounded-full ${
              status === "pending"
                ? "bg-orange"
                : status === "paid"
                ? "bg-green"
                : "bg-blue dark:bg-lightBlue"
            }`}
          />
          {status ? (status?.charAt(0).toUpperCase() + status?.substring(1)) : "Pending"} 
        </p>
      </div>
  )
}

export default Status