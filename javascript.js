// Datos de clientes registrados
const clientes = [
    { nombre: 'Juan Pérez', identificador: 'juan123', clave: '1234', saldo: 1000 },
    { nombre: 'María González', identificador: 'maria456', clave: '5678', saldo: 1500 },
    { nombre: 'Carlos López', identificador: 'carlos789', clave: '9101', saldo: 2000 }
];

// Función para validar identidad
function validarIdentidad(identificador, clave) {
    return clientes.find(cliente => cliente.identificador === identificador && cliente.clave === clave);
}

// Función para mostrar el menú
function mostrarMenu(cliente) {
    let opcion = 0;

    while (opcion !== 4) {
        opcion = parseInt(prompt(`Seleccione una opción:
        1. Ver saldo
        2. Realizar giro
        3. Realizar depósito
        4. Salir`));

        switch (opcion) {
            case 1:
                alert(`Su saldo actual es: $${cliente.saldo}`);
                break;
            case 2:
                let montoGiro = parseFloat(prompt("Ingrese el monto a girar:"));
                if (montoGiro > cliente.saldo) {
                    alert("Fondos insuficientes. No puede girar más que su saldo actual.");
                } else {
                    cliente.saldo -= montoGiro;
                    alert(`Ha girado $${montoGiro}. Su nuevo saldo es: $${cliente.saldo}`);
                }
                break;
            case 3:
                let montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));
                cliente.saldo += montoDeposito;
                alert(`Ha depositado $${montoDeposito}. Su nuevo saldo es: $${cliente.saldo}`);
                break;
            case 4:
                alert("Gracias por utilizar nuestros servicios. Hasta luego.");
                break;
            default:
                alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
}

// Inicio de sesión del usuario
function iniciarSesion() {
    let identificador = prompt("Ingrese su identificador:");
    let clave = prompt("Ingrese su clave:");

    let cliente = validarIdentidad(identificador, clave);

    if (cliente) {
        alert(`Bienvenido, ${cliente.nombre}`);
        mostrarMenu(cliente);
    } else {
        alert("Identificador o clave incorrectos. Por favor, intente de nuevo.");
    }
}

// Ejecutar el programa
iniciarSesion();
