function EsGrito(ingresado){
	let tam, pepe=0, perico=0, aux;
	tam= ingresado.length;

	for(let i=0; i<tam; i++){

		if(ingresado.charAt(i)=='!'){
			pepe++;
		} else{
			perico++;
		}	
	}

	if(pepe>1){
		aux='ESGRITO';
	} else{
		aux='escrito';
	}

	return aux;
}
