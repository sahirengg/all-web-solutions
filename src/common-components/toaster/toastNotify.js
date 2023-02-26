import { toast } from "react-toastify";

export const toastNotify = (para,status) => {

  if (status == 1){
    toast.success(para, { 
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 8000,
    });
  } else{
    toast.error(para, { 
      position: toast.POSITION.BOTTOM_RIGHT, 
      autoClose: 8000 })

  }
} 