/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Este archivo se cargara al acceder a la ruta
 * 		   raíz de '/pokemons/<id>/description'.
-------------------------------------------------------------------------- */

import { useRouter } from 'next/router';

import useIsMounted from '@/hooks/useIsMounted';

// Ruta: http://localhost:3000/pokemons/<id>/description
const Description = () => {
	const router = useRouter();
	const isMounted = useIsMounted();

	if (!isMounted) {
		return null;
	}

	console.log(router.query.id);

	return (
		<div>
			<p>Descripción de Pokemon: {router.query.id}</p>
		</div>
	);
};

export default Description;
