import { useState } from "react";
import { toast } from "react-toastify";

const Formulario = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  const [emailRepetido, setEmailRepetido] = useState("");

  const manejarCambioEmailRepetido = (event) => {
    setEmailRepetido(event.target.value);
  };

  const validarEmails = () => {
    return datosForm.email === emailRepetido;
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    if (validarEmails()) {
      enviarOrden();
    } else {
      toast.error("Los correos electrónicos no coinciden.");
    }
  };

  return (
    <div>
      <h2>Llena el formulario para terminar con la compra</h2>
      <form className="form-checkout" onSubmit={manejarEnvio}>
        <label>Nombre</label>
        <input type="text" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />

        <label>Telefono</label>
        <input type="text" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />

        <label>Email</label>
        <input type="text" name="email" value={datosForm.email} onChange={guardarDatosInput} />

        <label>Repetir Email</label>
        <input type="text" value={emailRepetido} onChange={manejarCambioEmailRepetido} />

        <button className="send-order" type="submit">Enviar orden</button>
      </form>
    </div>
  );
};

export default Formulario;
