import { React, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

function Availableorders() {
  const columns = [
    {
      name: "id",
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
    const getItems = async () => {
      try {
        const response = axios.get("http://localhost:3000/price");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

  const data = [orders];

  const options = {
    filterType: "checkbox",
  };
  return (
    <MUIDataTable
      title={"Available Orders"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default Availableorders;
