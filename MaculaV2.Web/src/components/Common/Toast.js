import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

//https://sweetalert.js.org/guides/#getting-started info on how to customize the sweet alert
//https://fkhadra.github.io/react-toastify/ info on toastify

const defaultObject = {
  message: "customize message",
  position: "top-right",
  autoClose: 2000,
  transition: Zoom,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  onClose: true
};

let success = options => {
  let merged = { ...defaultObject, ...options };
  toast.success(merged.message, merged);
};

let error = options => {
  let merged = { ...defaultObject, ...options };
  toast.error(merged.message, merged);
};

let info = options => {
  let merged = { ...defaultObject, ...options };
  toast.info(merged.message, merged);
};

let warning = options => {
  let merged = { ...defaultObject, ...options };
  toast.warning(merged.message, merged);
};

let prompt = (info, callback) => {
  const item = {
    title: "Waiting for your input",
    text: "Please select an option",
    icon: "info",
    buttons: true,
    dangerMode: false
  };

  let merged = { ...item, ...info };
  swal(merged).then(callback);
};

export { success, error, prompt, info, warning };
