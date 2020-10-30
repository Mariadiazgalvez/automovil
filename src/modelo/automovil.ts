import {Schema, model } from 'mongoose'
 class Automovil {
    private _matricula: string
    private _arrancado: boolean
    private _consumo: number
    private _velocidad: number

    constructor(_matricula:string, _consumo:number, _velocidad:number){
        this._matricula = _matricula
        this._arrancado = false
        this._consumo = _consumo
        this._velocidad = _velocidad
    }

    Matricula(){
        return this._matricula
    }
    Arrancar(){
        return this._arrancado
        
    }
    Arrancado(){
        if(this._arrancado == false){
            throw "Automovil parado"
        } else {
            this._arrancado = true
            this._velocidad = this._velocidad
        }
        
    }
    Consumo(){
        return this._consumo
        
    }
    
    Consumido(tiempo:number){
        return (this._velocidad/tiempo)*(this._consumo/100)
    }

    Velocidad(){
        return this._velocidad
        
    }
    set velocidad (_velocidad:number){
        if(this._arrancado == false){
            throw "No se puede poner velocidad, el coche esta parado"
        } else {
            this._velocidad = _velocidad
        }
        
    }
    imprimirAutomovil(){
        return `El automovil con matricula ${this._matricula} va a ${this._velocidad} km/h y consume ${this._consumo} L.`
    }
    
}export{Automovil}

// Definimos el Schema
const automovilSchema = new Schema({
    _matricula : String,
    _arrancado : Boolean,
    _consumo : Number ,
    _velocidad : Number,
})

// La colección de la BD: vehiculos (Plural siempre)
export const Automoviles = model ('automoviles', automovilSchema)