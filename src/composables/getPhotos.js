import {ref} from 'vue'
import {projectFirestore, timestamp} from '../firebase/config'
import env from 'dotenv'
const getPhotos =  (term) =>{

    const photos = ref([])
    const error = ref(null)
    const API_KEY = process.env.VUE_APP_API_KEY

    const load = async ()=>{
      try{

    //     await new Promise(resolve=>{
    //       setTimeout(resolve, 400)
    //   })
        let data = await fetch('https://api.unsplash.com/search/photos?per_page=24&query=' + term, 
         {
            method: "GET",
            headers: {
                "Authorization": "Client-ID " + API_KEY
              }
            })
        if(!data.ok){
          throw Error('No data')
        }
        photos.value = await data.json()
      }
      catch(err) {
        //catches try block error
        error.value = err.message //eqls message created in if try block
      }

    }
return {
     photos,
     error,
     load
}
     
}
export default getPhotos