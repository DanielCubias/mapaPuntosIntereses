class Excel {
    constructor() {
      this.data = [];
    }


    async readCSV(file) {
      return new Promise((resolve, reject) => {
        let content;
        
        // Comprobar si es un objeto File o una cadena de texto
        if (file instanceof File) {
          const reader = new FileReader();
          reader.onload = (e) => {
            content = e.target.result;
            processCSV(content);
          };
          reader.onerror = () => reject(new Error('Error al leer el archivo'));
          reader.readAsText(file);
        } else if (typeof file === 'string') {
          content = file;
          processCSV(content);
        } else {
          reject(new Error('Formato de entrada no válido'));
        }
        
     
      });
    }

    
    async getpais(city) {
      return new Promise(async (resolve, reject) => {
      
      });
    }
  }