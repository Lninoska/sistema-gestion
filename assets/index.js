class empleado {
    constructor (nombre, rol, salario, datosPersonales) {
        this.nombre = nombre;
        this.rol = rol;
        this.salario = Symbol ('salario');
        this.datosPersonales = Symbol('datosPersonales');

        this[this.salario] = salario;
        this[this.datosPersonales] = datosPersonales;
    }
}


let empleado1 = {
    nombre: "Elvira",
    edad: 29,
    salario: 600000,
    rol: "programadora"
};

let handler = {
    get (target, propiedad){
        if(propiedad === "salario") {
            console.log(`Acceso denegado a ${propiedad}`);
            return undefined;
        } else if (propiedad === 'datosPersonales') {
            console.log(`Acceso denegado a ${propiedad}`);
            return undefined;
        };
        return Reflect.get[target, propiedad]
    },
    set(target, propiedad, value) {
        if(propiedad ==="salario"){
            console.log(`Acceso denegado para modificar ${propiedad}`);
            return false;
        } else if (propiedad === 'datosPersonales') {
            console.log(`Acceso denegado para modificar ${propiedad}`);
            return false;
        }
        Reflect.set[target, propiedad] = value;
        return false;
    }
}


let proxy = new Proxy (empleado1, handler);
console.log (empleado1.nombre )
console.log(proxy.salario)
console.log(proxy.datosPersonales)
proxy.salario = 50000;


