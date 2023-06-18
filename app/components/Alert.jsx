import React from "react";

const Alert = ({type,message,title}) => {
    const bg = (type=="success")? "bg-green-600" : "bg-red-600"

  return (
    <div
      class={`p-4 mb-4 text-sm ${bg}`}
      role="alert"
    >
      <span class="font-medium">{title}</span>{message}
    </div>
  );
};

export default Alert;
