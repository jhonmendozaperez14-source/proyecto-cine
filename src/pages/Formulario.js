import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './formulario.css';
function Formulario() {
 const navigate = useNavigate();
 const [usuario, setUsuario] = useState("");
 const [clave, setClave] = useState("");

 const handleUsuarioChange = (e) => {
  setUsuario(e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]/g, ""));
 };

 const handleClaveChange = (e) => {
  setClave(e.target.value.replace(/\D/g, "").slice(0, 8));
 };

 const handleReset = () => {
  setUsuario("");
  setClave("");
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  sessionStorage.setItem('usuarioRegistrado', usuario);
  navigate('/hoja-registro');
 };

 return (
 <>
 <section id="slogueo">
 <h2>Inicio de Sesion</h2>
 <form id="frmlogueo" onSubmit={handleSubmit}>
 <table>
 <tr>
 <td><label>Usuario</label></td>
 <td><input type="text" 
 id="usuario"
 name="usuario"
 placeholder="Ingrese Usuario" 
 required
 pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+"
 value={usuario}
 onChange={handleUsuarioChange}
 />
 </td>
 </tr>
 <tr>
 <td><label>Clave</label></td>
 <td><input type="password"
 id="clave"
 name="clave" 
 placeholder="Ingrese Clave"
 required
 minLength="8"
 maxLength="8"
 pattern="[0-9]{8}"
 inputMode="numeric"
 value={clave}
 onChange={handleClaveChange}
 />
 </td>
 </tr>
 <tr>
 <td colSpan="2">
 <button type='reset' onClick={handleReset}>Limpiar</button>
 <button type='submit'>Enviar</button>
 </td>
 </tr>
 </table>
 </form>
 </section>
 </>
 )
}

export default Formulario;
