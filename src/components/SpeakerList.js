import React, { useEffect , useState } from 'react'
import SpeakerCardUI from './SpeakerCardUI'
import UserPlaceHolder from './UserPlaceHolder.js'

const SpeakerList = () => {

  //etat initial de la SpeakerList
  const [data, setData] = useState([])

  //initialisation de l'erreur
  const [isError, setIsError] = useState(false)

  //Chargement de la page : Ajout d'un chargement à la page

  //initialisation de l'etat du loadeur
  const [isLoading, setIsLoading] = useState(false)

  //Refactoring : creation d'une fonction qui va récuperer les données

  // const fetchData = () =>{
  //   fetch('https://server-speakers.herokuapp.com/speakers')
  //   .then(response => response.json())
  //   .then(data => {
  //     //manipuler les données et les afficher dans le dom ici
  
  //     setData(data) //mise à jour des données en utilisant le setData
  
  //   }).catch((error) =>{
  
  //     //gérer l'erreur
      
  //   })
  // }

  //Refactoring 2: Utilisation du Asunc/await
  // const fetchData = async () => {
  //   const response = await fetch('https://server-speakers.herokuapp.com/speakers')
  //   const data = await response.json()
  //   setData(data)
  // }

  //Refactoring 3: gestion des erreurs avec try & catch
  const fetchData = async () => {
   try {
    const response = await fetch('https://server-speakers.herokuapp.com/speakers')
    const data = await response.json()
    setData(data)

    setIsLoading(false) //desactivation du loadeur si on recoit les donnees
    
   } catch (error) {
    setIsError(true) //mise à jour de l'erreur s'il y'a problème

    setIsLoading(false) //desactivation du loadeur si on a une erreur
   }
  }

  //Utilisation du useEffect()
  useEffect(() =>{

    setIsLoading(true) //activation du loadeur au montage du composant

   fetchData()
  }, [])

  
  //utilisation d'un composant UsePlaceHolder
  if (isLoading) return <UserPlaceHolder />

  if(isError)
    return (
      <div style={{ color: 'red'}}className='ui text'>
        Nous avons trouvé une erreur

      </div>
    )

  return (
    <div className='container ui four column stackable grid'  style={{ display: 'flex', justifyContent : 'space-around' }} >
      {
        data.map((speaker, index) => {
          return(
            <div className='four wide column' key={index}>
                <SpeakerCardUI {...speaker} key={index} />
            </div>
          )
        })
      }

    </div>
  )
}

export default SpeakerList