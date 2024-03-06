"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormItem from "./FormItem";
import Image from "next/image";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import * as Yup from "yup";

interface FormValues {
  companyStreetAddress: string;
  companyCity: string;
  companyPostCode: string;
  companyCountry: string;
  clientName: string;
  clientEmail: string;
  clientStreetAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  id: string;
}

const FormSchema = Yup.object().shape({
  companyStreetAddress: Yup.string().required("can't be empty"),
  companyCity: Yup.string().required("can't be empty"),
  companyPostCode: Yup.string().required("can't be empty"),
  companyCountry: Yup.string().required("can't be empty"),
  clientName: Yup.string().required("can't be empty"),
  clientEmail: Yup.string().email("Invalid email").required("can't be empty"),
});

const InvoiceForm = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: Function;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  // const [invoiceDate, setInvoiceDate] = useState("");
  // const [paymentTerms, setPaymentTerms] = useState("");
  // const [projectDescription, setProjectDescription] = useState("");

  const initialValues: FormValues = {
    companyStreetAddress: "",
    companyCity: "",
    companyPostCode: "",
    companyCountry: "",
    clientName: "",
    clientEmail: "",
    clientStreetAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    id: "",
  };

  // Creates invoice ID ex: RT3060
  const generateInvoiceID = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    const MIN = 1000;
    const MAX = 10000;
    let index1 = Math.floor(Math.random() * charactersLength);
    let index2 = Math.floor(Math.random() * charactersLength);
    let numbers = Math.floor(Math.random() * (MAX - MIN) + MIN);
    return characters[index1] + characters[index2] + numbers;
  };

  const goBack = () => {
    setModalOpen(!modalOpen);
    router.back();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          // TODO: add to database
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="px-6 md:px-14">
              <p className="text-sm_variant text-purple mb-6">Bill From</p>
              <div className="flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <label
                      className={`${
                        errors.companyStreetAddress &&
                        touched.companyStreetAddress &&
                        "text-red-500"
                      }`}
                    >
                      Street Address
                    </label>
                    {errors.companyStreetAddress &&
                      touched.companyStreetAddress && (
                        <span className="text-error text-red-500">
                          {errors.companyStreetAddress}
                        </span>
                      )}
                  </div>

                  <input
                    type="text"
                    name="companyStreetAddress"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.companyStreetAddress}
                    className={`${
                      touched.companyStreetAddress &&
                      errors.companyStreetAddress &&
                      "border-red-500 focus-within:outline-text-red-500"
                    }`}
                  />
                </div>

                <div className="flex gap-6 mb-6 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className={`${
                          errors.companyStreetAddress &&
                          touched.companyStreetAddress &&
                          "text-red-500"
                        }`}
                      >
                        City
                      </label>
                      {errors.companyCity && touched.companyCity && (
                        <div className="text-error text-brightRed">
                          {errors.companyCity}
                        </div>
                      )}
                    </div>

                    <input
                      type="text"
                      name="companyCity"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companyCity}
                      className={`${
                        touched.companyCity &&
                        errors.companyCity &&
                        "border-red-500 focus-within:outline-text-red-500"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className={`${
                          errors.companyStreetAddress &&
                          touched.companyStreetAddress &&
                          "text-red-500"
                        }`}
                      >
                        Post Code
                      </label>
                      {errors.companyPostCode && touched.companyPostCode && (
                        <span className="text-error text-brightRed">
                          {errors.companyPostCode}
                        </span>
                      )}
                    </div>

                    <input
                      type="text"
                      name="companyPostCode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companyPostCode}
                      className={`${
                        touched.companyPostCode &&
                        errors.companyPostCode &&
                        "border-red-500 focus-within:outline-text-red-500"
                      }`}
                    />
                  </div>
                  <div className="w-full md:flex-1">
                    <div className="flex items-center justify-between">
                      <label
                        className={`${
                          errors.companyStreetAddress &&
                          touched.companyStreetAddress &&
                          "text-red-500"
                        }`}
                      >
                        Country
                      </label>
                      {errors.companyCountry && touched.companyCountry && (
                        <span className="text-error text-brightRed">
                          {errors.companyCountry}
                        </span>
                      )}
                    </div>

                    <input
                      type="text"
                      name="companyCountry"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companyCountry}
                      className={`${
                        touched.companyCountry &&
                        errors.companyCountry &&
                        "border-red-500 focus-within:outline-text-red-500"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mb-6">
                  <p className="text-sm_variant text-purple mb-6">Bill To</p>
                  <div className="flex items-center justify-between">
                    <label
                      className={`${
                        errors.companyStreetAddress &&
                        touched.companyStreetAddress &&
                        "text-red-500"
                      }`}
                    >
                      Client&apos;s Name
                    </label>
                    {errors.clientName && touched.clientName && (
                      <span className="text-error text-brightRed">
                        {errors.clientName}
                      </span>
                    )}
                  </div>

                  <input
                    type="text"
                    name="clientName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.clientName}
                    className={`${
                      touched.clientName &&
                      errors.clientName &&
                      "border-red-500 focus-within:outline-text-red-500"
                    }`}
                  />
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <label
                      className={`${
                        errors.companyStreetAddress &&
                        touched.companyStreetAddress &&
                        "text-red-500"
                      }`}
                    >
                      Client Email
                    </label>
                    {errors.clientEmail && touched.clientEmail && (
                      <span className="text-error text-brightRed">
                        {errors.clientEmail}
                      </span>
                    )}
                  </div>

                  <input
                    type="email"
                    name="clientEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.clientEmail}
                    placeholder={"e.g email@example.com"}
                    className={`${
                      touched.clientEmail &&
                      errors.clientEmail &&
                      "border-red-500 focus-within:outline-text-red-500"
                    }`}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="">Street Address</label>
                  <input type="text" />
                </div>

                <div className="flex gap-6 mb-6 flex-wrap">
                  <div className="flex-1">
                    <label htmlFor="">City</label>
                    <input type="text" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="">Post Code</label>
                    <input type="text" />
                  </div>

                  <div className="w-full md:flex-1">
                    <label htmlFor="">Country</label>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className="mb-12 md:flex md:flex-wrap md:gap-4">
                <div className="mb-6 flex-1 relative">
                  <label htmlFor="">Invoice Date</label>
                  <input type="date" data-date-format="DD MMMM YYYY" />
                  {/* Make required */}
                </div>
                <div className="mb-6 flex-1">
                  <label htmlFor="">Payment Terms</label>

                  <div
                    className="dropdown-container cursor-pointer relative flex items-center justify-between"
                    onClick={toggleDropdown}
                  >
                    <p>Net 1 day</p>

                    {isOpen && (
                      <div className="bg-formInputColor w-full absolute left-0 top-14 rounded-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <ul>
                          <li className="pl-4 py-4 border-b-[1px] border-[#DFE3FA] dark:border-[#1E2139] hover:text-lightPurple">
                            <p>Net 1 Day</p>
                          </li>
                          <li className="pl-4 py-4 border-b-[1px] border-[#DFE3FA] dark:border-[#1E2139] hover:text-lightPurple">
                            <p>Net 7 Days</p>
                          </li>
                          <li className="pl-4 py-4 border-b-[1px] border-[#DFE3FA] dark:border-[#1E2139] hover:text-lightPurple">
                            <p>Net 14 Days</p>
                          </li>
                          <li className="pl-4 py-4 border-b-[1px] border-[#DFE3FA] dark:border-[#1E2139] hover:text-lightPurple">
                            <p>Net 30 Days</p>
                          </li>
                        </ul>
                      </div>
                    )}

                    <Image
                      src="/icon-arrow-down.svg"
                      width={10}
                      height={10}
                      alt="Arrow down"
                    />
                  </div>
                </div>
                <div className="mb-6 md:w-full">
                  <label htmlFor="">Project Description</label>
                  <input type="text" />
                </div>
              </div>

              <div>
                <p className="text-[18px] font-bold text-[#777f98] mb-6">
                  Item List
                </p>
                {/* TODO: render list of form items */}
                <FormItem />
                <div>
                  <button className="bg-addItem py-4 w-full rounded-[24px] text-sm_variant text-formLabel">
                    + Add New Item
                    {/* TODO: create another form item once clicked */}
                  </button>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0">
              <div className="h-[64px] bg-gradient-to-t from-black opacity-20" />
              <div className="bg-white dark:bg-base px-6 py-8 rounded-br-[20px] flex justify-center md:justify-between ">
                {/* If creating a new invoice, Show Discard, Save as Draft, and Save & Send*/}
                <button
                  type="button"
                  onClick={goBack}
                  className="text-sm_variant text-mediumBlue dark:text-gray bg-paleGray dark:bg-lighterDarkBlue p-4 rounded-3xl"
                >
                  Discard
                </button>

                <div className="">
                  <button
                    type="button"
                    className="text-sm_variant text-gray bg-[#373B53] p-4 rounded-3xl mr-2 md:mr-4"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="text-sm_variant text-white bg-lightPurple p-4 rounded-3xl"
                  >
                    Save & Send
                  </button>
                </div>

                {/* If editing an invoice, show Cancel and Save Changes buttons */}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default InvoiceForm;
