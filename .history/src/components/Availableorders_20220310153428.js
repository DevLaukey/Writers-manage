import React from 'react'
import MUIDataTable from "mui-datatables";


function Availableorders() {
  const column = [
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
      name: "Assigned",
      label: "Assigned",
      options: {
        filter: true,
        sort: false,
      },
    }
  ];

  const data = [
   ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={column}
      options={options}
    />
  );
}

export default Availableorders