import { Automovil, Automoviles } from "./modelo/automovil"
import { menu, menu2 } from "./vistas/menu"
import { leerTeclado } from "./vistas/lecturaTeclado"
import { connect, disconnect } from "./database/database"

const main = async() => {
    let automoviles: Array<Automovil> = new Array()
    let num: number 
    do {
        num = await menu()
        switch(num){
            case 1:
                console.log("Creando un nuevo automovil")
                let matric:string 
                let consum:number
                let veloci:number
                matric=await leerTeclado("Introduzca la matrícula del automovil")
                consum = parseInt( await leerTeclado("Introduzca el consumo del automovil"))
                veloci = parseInt (await leerTeclado ("Introduzca la velocidad"))
                let auto1 = new Automovil(matric,consum,veloci)
                let existe = false
                automoviles.forEach(Autos => {
                    if (auto1.Matricula == Autos.Matricula){
                        existe=true
                    }
                });
                if (existe){
                    console.log("Este automovil ya existe")
                } else{
                    automoviles.push(auto1)
                }
                break
            case 2:
                if (automoviles.length==0){
                    console.log("No existen automoviles")
                } else {
                    console.log("Está imprimiendo los automoviles")
                    automoviles.forEach(Automovil => {
                        console.log(`${Automovil.imprimirAutomovil()}`)
                    });
                }
                break
            case 3:
                if (automoviles.length==0){
                    console.log("No existen automoviles")
                } else {
                    let matri1:string
                    console.log("Escoja la matrícula de un automovil")
                    automoviles.forEach(Automovil => {
                        console.log(`${Automovil.imprimirAutomovil()}`)
                    });
                    matri1=await leerTeclado("Introduzca la matrícula del automovil")
                    let index:number=-1
                    automoviles.forEach(Automovil => {
                        if(Automovil.Matricula() == matri1){
                           index=automoviles.indexOf(Automovil)
                        }else{
                            console.log("Este automovil no existe")
                        }
                    });
                    if(index!=-1){
                        let num2:number
                        do {
                            num2 = await menu2()
                            switch(num2){
                                case 1:
                                    console.log("Automoviles creados")
                                    console.log(automoviles[index].imprimirAutomovil())
                                    break
                                case 2:
                                    if(automoviles[index].Arrancar()){
                                        console.log("Apagando automovil")
                                        automoviles[index].Arrancado()
                                    }else{
                                        console.log("Encendiendo automovil")
                                        automoviles[index].Arrancado()
                                    }
                                    break
                                case 3:
                                    let vel:number
                                    vel=parseInt(await leerTeclado("Introduzca una nueva velocidad del automovil"))
                                    try {
                                      automoviles[index].velocidad = vel
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    let t:number
                                    t=parseInt(await leerTeclado("Introduzca el tiempo en horas que lleva el automovil a la velocidad actual"))
                                    console.log(`${automoviles[index].Consumido(t)}`)
                                    break
                                case 5:
                                    await connect()
                                    // Crear el doc Schema y objeto Schema a partir del objeto
                                    // salvarlo
                                    const dSchema = {
                                            _matricula : String,
                                            _arrancado : Boolean,
                                            _consumo : Number ,
                                            _velocidad : Number,
                                    }
                                    const oSchema = new Automoviles (dSchema)
                                    await oSchema.save()
                                    await disconnect()
                                    break
                                case 0:
                                    console.log('\n--VOLVIENDO A LOS AUTOMOVILES--')
                                    break
                                default:
                                    console.log("Opción incorrecta")
                                    break
                            }
                        } while (num2!=0);
                    }
                }
                break
            case 0:
                console.log('\n--ADIÓS--')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (num!=0);
}

main()