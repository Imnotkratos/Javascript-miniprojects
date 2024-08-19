class Peronsa{
  constructor(nombre,edad,dni){
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
  }
  
  //Getters and setters
  
  //Nombree
  getNombre(){
    return this._nombre;
  }
  setNombre(new_name){
     this._nombre = new_name; 
  }

  //Edad
  getEdad(){
    return this._edad;
  }
  setEdad(new_edad){
    this._edad = new_edad;
  }

  //DNI
  getDNI(){
    return this._dni;
  }
  setDNI(new_dni){
    this._dni = new_dni;
  }
}

class Estudiante extends Persona{
  constructor(nombre,edad,dni,carrera){
    super(nombre,edad,dni);
    this.carrera = carrera;
    this.FING = ["Ingenieria de Sistemas","Ingenieria Civil","Ingenieria Industrial"];
    this.FARQ = ["Arquitectura"]
  }
  //Getter and setter
  getCarrera(){
    return this._carrera;
  }
  setCarrera(new_carrera){
    this._carrera = new_carrera;
  }
  verificarFacultad(){
    for(let i = 0,i < 3, i++){
     if(this.carrera == this.FING[i]){
       console.log("Perteneces a la facultad de Ingeniería");
       break;
     }
      else if(this.carrera 00 this.FARQ[i]){
        console.log("Perteneces a la Facultad de Arquitectura");
       break;
      }
    }
  }
  
  

}



