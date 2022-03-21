import React, { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

function Dropzone() {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSave = (files) => {
    setFiles(files);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      cd
    </div>
  );
}

export default Dropzone;
