import { useEffect, useState } from "react"

import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
// import { getGifs } from "../helpers/getGifs"

//(Ahora el codigo se encuentra en getGifs.js)

//Es una buena practica no hacer el anterior codigo dentro del GifGrid
//Por que nuestro componente no va a estar reprocesando la funcion getGifs

//Nunca debemos colocar la ejecucion de una funcion directamente dentro de un functional component

export const GifGrid = ({category}) => {
 
  const {images, isLoading} = useFetchGifs(category)

  console.log({images, isLoading})


  return (
    <>
        <h3> {category} </h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
        }

        <div className="card-grid">
          {
            images.map((image) =>(
              <GifItem 
                key={image.id}
                {...image}
              />
            ))
          }
        </div>
    </>
  )
}
