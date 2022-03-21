import { React, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

function Availableorders() {
  const columns = [
    {
      name: "paperId",
      label: "ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "deadline",
      label: "DeadLine",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "pages",
      label: "Number of pages",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "instructions",
      label: "Details",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "assigned",
      label: "Assigned To:",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/orders")
       .then((response) => response.json())
       .then((response) => setOrders(response));
  }, [orders]);
  

const orders1=[{id:1221, pages:33}, {id:1222, pages:2}]
  const options = {
    filterType: "checkbox",
  };
  return (
    <MUIDataTable
      title={"Available Orders"}
      data={orders1}
      columns={columns}
      options={ {filter: true,
        sort: false,}}
    />
  );
}

export default Availableorders;
