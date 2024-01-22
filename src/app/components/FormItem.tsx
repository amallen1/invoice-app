import React from "react";

const FormItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" value={value} />
    </div>
  );
};

export default FormItem;
