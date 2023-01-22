/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra un breve ejemplo de una ruta
 * 		   personalizada.
-------------------------------------------------------------------------- */

import Link from 'next/link';

// Ruta: http://localhost:3000/pig
const Pig = () => {
	return (
		<div>
			<p>Cerdo Feliz</p>
			<Link href="/">Ir a Inicio</Link>
		</div>
	);
};

export default Pig;
