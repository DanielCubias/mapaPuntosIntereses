class Museu extends PuntInteres{

    horaris;
    preu;
    moneda;
    descripcio;

    constructor(id,pais,ciutat,nom,direccio,horaris,preu,moneda,descripcio){
        super(id,pais,ciutat,nom,direccio);
        this.horaris=horaris;
        this.preu= preu;
        this.moneda = moneda;
        this.descripcio = descripcio;
        
    }


   //hacer get iva
      // si no hay iva == devuelvo precio
      // si el PRECIO == 0 --> "eNTRADA GRATIS"
      // iva * precio / 2

      getIva(ivaMuseu){


        if(ivaMuseu===0){
            console.log(`Preci sin iva ${this.preu} `);
        }else if(this.preu===0){
            console.log("La entrada es gratis");
        }else{
            let presioConIva;

            presioConIva = this.preu * (ivaMuseu/2);

            console.log(`El precio con iva es ${presioConIva}`);
        }

      }

}

// const museo1 = new Museu(455,"Alemania","Frankfurt","hamed", "calle rosello","12:56",0,"Euro");
// console.log(museo1.getIva(10))