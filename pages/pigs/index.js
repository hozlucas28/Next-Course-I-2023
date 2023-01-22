/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Este archivo se cargara por defecto al ingresar a la ruta
 * 		   raíz de '/pigs'.
-------------------------------------------------------------------------- */

import Link from 'next/link';

// Ruta: http://localhost:3000/pigs
const Pigs = () => {
	return (
		<div>
			<p>Soy Index de Cerditos</p>
			<Link href="/">Ir a Inicio</Link>
		</div>
	);
};

export default Pigs;
