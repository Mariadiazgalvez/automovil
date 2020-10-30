import { leerTeclado } from '../vistas/lecturaTeclado'

export const menu = async () => {
    let num: number
    console.log('\n')
    console.log('1.- Nuevo automovil')
    console.log('2.- Automoviles')
    console.log('3.- Escoger automovil')
    console.log('0.- Salir')
    num = parseInt( await leerTeclado('--OPCIÓN--') )
    return num
}

export const menu2 = async () => {
    let num: number
    console.log('\n')
    console.log('1.- Visualizar automovil')
    console.log('2.- Arranca o parar el automovil')
    console.log('3.- Cambiar velocidad')
    console.log('4.- Consumo del automovil')
    console.log('0.- Salir')
    num = parseInt( await leerTeclado('--OPCIÓN--') )
    return num
}

