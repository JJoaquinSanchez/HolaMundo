//Clase Persona
var Persona = /** @class */ (function () {
    function Persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    Persona.prototype.cualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split("   ");
    };
    ;
    Persona.prototype.cualEsTuEdad = function () {
        var edad = 2022 - this.nacimiento;
        return "Mi edad es " + edad + " años";
    };
    ;
    Persona.prototype.cualEsTuGeneracion = function () {
        if (this.nacimiento < 1975) {
            return "Soy un Baby Boomer";
        }
        if (this.nacimiento >= 1975 && this.nacimiento <= 1999) {
            return "Soy un Milenial";
        }
        if (this.nacimiento >= 1999) {
            return "Soy un Centenial";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "Soy Generacion Alfa";
        }
    };
    return Persona;
}());
;
var natu = new Persona(2000, "Re Natu");
console.log(natu.cualEsTuNombre());
console.log(natu.cualEsTuGeneracion());
console.log(natu.cualEsTuEdad());
