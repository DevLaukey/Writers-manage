import React from 'react'

function Availableorders() {
  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default Availableorders