import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
      const newImages = await getGifs(category) 
      setImages(newImages)
      setIsLoading(false)
    }
  
  
    //El useEffect es un hook de React que sirve para disparar efectos secundarios
    //Un efecto secundario es un proceso que quiero ejecutar cuando algo suceda
    useEffect(() =>{
      getImages()
    }, [])

    //Un hook es una funcion que regresa algo
    return{
        images,
        isLoading
    }
}
