import Swal from "sweetalert2";

const AlertHelper = (text,title = 'Alerta',icon = 'error') => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
}

export default AlertHelper