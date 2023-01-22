/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Este es el javaScript que se cargara por defecto al dirigirse a
 * 		   la raíz.
 *
 *
 * IMPORTANTE:
 *  			  - <Link> = Se comporta como una etiqueta <a> para
 * 							 navegar entre las distintas páginas de mi
 * 							 aplicación.
 *  			  - <Image> = Permite incorporar imágenes (ubicadas en la
 * 							  carpeta 'public'), siendo obligatorios los
 * 							  atributos <width> y <height>.
-------------------------------------------------------------------------- */

import Link from 'next/link';
import Image from 'next/image';

import Coffee from '@/public/coffee.png';

export default function Home() {
	return (
		<div>
			<p>¡Hola Mundo!</p>
			<Link href="/pigs">Ir a Cerditos</Link>
			<Image
				src={Coffee}
				width={400}
				height={400}
			/>
			;
		</div>
	);
}
