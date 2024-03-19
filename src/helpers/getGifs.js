export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=1j71smkCefhHvpWHT3NRNRjXt1VIojNt&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()
  
    //Se usa el .map porque data es un arreglo
  
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
  
    // console.log(gifs)
    return gifs
  }