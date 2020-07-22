import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">

      <h1>tabla de los integrantes del ppi</h1>
     < hr></hr>

<table className="separad0" border="1">

<tr>

<td className="color">nombre</td>
<td className="color">apellido</td>
<td className="color"> corrreo</td>
<td className="color"> celular</td>
</tr>

<tr>
<td>robinson</td>
<td>seulveda</td>
<td>barobinson1323@gmail.com</td>
<td> 3218318901</td>
</tr>

<tr>
<td>carlos</td>
<td>daza</td>
<td>carlosdazaatehortua@gmail.com</td>
<td>302401257</td>
</tr>

<tr>
<td>diego</td>
<td>alexis</td>
<td>diegoalexis@gmail.com</td>
<td> 3137236649</td>
</tr>

</table>
      
      
    
    </div>
    
  );
}
