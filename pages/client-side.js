import {useState,useEffect} from 'react'
import axios from 'axios'

const url ='https://pokeapi.co/api/v2/pokemon?limit=151' 

const clientSide = () => {

    const [pokemon, setPokemon] = useState([])


    useEffect(()=>{
        const fetchPokemon = async()=>{
        const response= await axios.get(url)
        
        const promises = response.data.results.map(result => {
          return(axios.get(result.url))
        });

        const responses = await Promise.all(promises)
        console.log(responses)
       

        const pokeData= responses.map(r=>{
            return{
                name: r.data.name,
                imgUrl: r.data.sprites.front_default
            }

        })

        setPokemon(pokeData)


        }

        fetchPokemon()
    },[])

    

    return pokemon.map(poke=>{
        return (
    <div>
    <img src={poke.imgUrl} />
    <p>{poke.name}</p>
    <hr/>
    </div>
)

    })

}

export default clientSide