class PuntInteres{
#id;
#esManual = false;
pais;
ciutat;
nom;
direccio;
tipus;
latitud;
longitud;
puntuacio = 0;
static totalTasques;


constructor(id,pais,ciutat,nom,direccio){

    this.#id = id;
    this.pais = pais;
    this.ciutat = ciutat;
    this.nom = nom;
    this.direccio = direccio;
}


getId(){

    return this.#id;

}

setId(id){

    this.#id = id;

}

getEsmanual(){

}

getNom(){
    
    return this.nom;
}

getDireccio(){
    
    return this.direccio;
}

setEsmanual(){

}

static obtenirTotalElement(){

}


}
