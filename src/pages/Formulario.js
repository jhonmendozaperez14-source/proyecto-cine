import React, { useState } from 'react';
function Formulario() {
 const [usuario, setUsuario] = useState("");
 const [clave, setClave] = useState("");
 return (
 <>
 <section id="slogueo">
 <h2>Inicio de Sesion</h2>
 <form id="frmlogueo" >
 <table>
 <tr>
 <td><label>Usuario</label></td>
 <td><input type="text" 
 id="usuario"
 name="usuario"
 placeholder="Ingrese Usuario" 
 value={usuario}
 onChange={(e) => setUsuario(e.target.value)}
 />
 </td>
 </tr>
 <tr>
 <td><label>Clave</label></td>
 <td><input type="password"
 id="clave"
 name="clave" 
 placeholder="Ingrese Clave"
 value={clave}
 onChange={(e) => setClave(e.target.value)}
 />
 </td>
 </tr>
 <tr>
 <td colSpan="2">
 <button type='reset'>Limpiar</button>
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
