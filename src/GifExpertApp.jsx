import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

  // Cuando quiero almacenar info y esa info tiene que cambiar el html usualmente debemos pensar en algun
  // hook para mantener el estado en este caso el useState

  const[categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = (newCategory) =>{
    //Agregar una nueva categoria
    // console.log(NewCategory)

    if(categories.includes(newCategory)) return


    // El ... sirve para llamar a todo lo que esta en el arreglo de categories
    setCategories([newCategory, ...categories])      // Esto es una forma de hacerlo
    // setCategories(cat =>[...cat, 'Super Smash Bros'])    // Esto es otra forma de hacerlo
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>


        {/* Input | para la caja de texto*/}
        <AddCategory 
          // setCategories={setCategories}    //Todos los eventos tienen "on"
          onNewCategory = {value => onAddCategory(value)}
        />


        {/* Listado de Gifs */}

          {/* El ol (order list) me sirve para listar con numeros */}
          {/* El map me sirve para barrer cada uno de los elementos del arreglo y regresar algo nuevo */}

        {
          categories.map( (category) =>( 
            <GifGrid key={category} category={category} /> 
          ))
        }

        {/* Gif Item */}
    </>
  )
}

export default GifExpertApp
