/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como crear una ruta dinámica y
 * 		   anidada en '/pigs'.
 *
 *
 * IMPORTANTE:
 *  			  - <useRouter> = Permite capturar el dato ingresado
 * 								  en la URL.
-------------------------------------------------------------------------- */

import { useRouter } from 'next/router';

import useIsMounted from '@/hooks/useIsMounted';

// Ruta: http://localhost:3000/pigs/<id>
const DinamycPig = () => {
	const isMounted = useIsMounted();
	const router = useRouter();

	if (!isMounted) {
		return null;
	}

	console.log({ router }, router.query.id);

	return (
		<div>
			<p>Cerdito Dinámico: {router.query.id}</p>
		</div>
	);
};

export default DinamycPig;
