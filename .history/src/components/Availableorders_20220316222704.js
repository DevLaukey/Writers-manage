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
      name: "details",
      label: "Details",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "assigned",
      label: "Assigned",
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
  }, []);
  
console.log(orders);
  const data = [{
     id: orders._id,
    }
    
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <MUIDataTable
      title={"Available Orders"}
      data={orders}
      columns={columns}
      options={options}
    />
  );
}

export default Availableorders;
