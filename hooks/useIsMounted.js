/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Este Hook me permite verificar si la ruta/página se encuentra
 * 		   lista para leer los datos que le fueron transmitidos.
-------------------------------------------------------------------------- */

import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

const useIsMounted = () => {
	const [loaded, setLoaded] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (router.isReady) {
			setLoaded(true);
		}
	}, [router.isReady]);

	return loaded;
};

export default useIsMounted;
