class Persona{
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

  verInfo(){
    console.log("Nombre: "+ this.nombre + " // "
               + "Edad: " + this.edad + " // "
               + "DNI: " + this.dni + " // "
               + "Carrera: " + this.carrera);
  }
    
}

class Docente extends Persona{
  constructo(nombre,edad,dni,especialidad){
    super(nombre,edad,dni);
    this.especialidad = especialidad;
  }
  getEspecialidad(){
    return this._especialidad;
  }
  setEspecialidad(new_especialidad){
    this._especialidad = new_especialidad;
  }

  verInfo(){
    console.log("Nombre: "+ this.nombre + " // "
               + "Edad: " + this.edad + " // "
               + "DNI: " + this.dni + " // "
               + "Especialidad: " + this.especialidad);
  }
}

class Administrador extends Persona{
  constructor(nombre,edad,dni,code){
    super(nombre,edad,dni);
    this.code = code;
  }
  getCode(){
    return this._code;
  }
  setCode(new_code){
    this._code = new_code;
  }
  verificarCode(){
    codigo = 123456789;
    if(this.code = codigo){
      console.log("Bienvenido/a " + this.nombre);
    }
    else{
      console.error("Codigo incorrecto.");
    }
  }
}

//Pruebas
estudiante = new Estudiante("Stefano",19,9127412,"Ingenieria de Sistemas");
docente = new Docente("Pepito",1142,124214,"Desarrollador de software");

//Contraseña incorrecta bota error
admin = new Administrador("Zzz",12,12345,12);



