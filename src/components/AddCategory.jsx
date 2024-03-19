import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target}) /** o (event) */ => {

        //Desestructuracion del target para entrar de una vez al evento
        // console.log(event.target.value)          
        // setinputValue(event.target.value)           Otra forma de hacerlo

        console.log(target.value)
        setinputValue(target.value)

        //El evento
    }

    const onSubmit = (event) => {
        console.log(inputValue)
        event.preventDefault()  //Sirve para que no se refresque la pagina
        if(inputValue.trim().length <= 1) return  //Para que se añadan elementos con mas de un string

        // setCategories(categories => [inputValue, ...categories]) //Primero se desestructura setCategories
        onNewCategory(inputValue.trim())
        //Para poder que se añada a la lista lo que escribamos

        setinputValue('') //Para que al precionar enter, quede limpio el cuadro

    }

  return (
    //El form lo que hace es refrescar la pagina
    <form onSubmit={(event) => onSubmit(event)}>
        <input
            type="text"
            //El placeholder es el texto que aparece en la cajita de texto
            placeholder="Buscar gifs"
            value={inputValue}  //El inputValue es el valor por defecto, en este caso es ' ' espacio en blanco
            //Lo que hace el setinputValue es agregar un valor
            onChange={ onInputChange } //Recibe el evento
        />
    </form>
  )
}
