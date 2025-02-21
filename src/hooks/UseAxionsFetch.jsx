import axios from 'axios'
import {useEffect, useState} from 'react'



const useAxiosFetch = (dataUrl)=>{
    const [isLoading,setIsLoading] = useState(false)
    const [fetchError,setFetchError] = useState(null)
    const [data,setData] = useState([])

    useEffect(()=>{
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchData = async(url)=>{
            setIsLoading(true)

            try{
                const responce = await axios.get(url,{
                    cancelToken:source.token
                })
                if (isMounted){
                    setData(responce.data)
                    setFetchError(null)
                }
            }catch(err){
                if (isMounted){
                    setFetchError(err.message)
                    setData([])
                }
            }finally{
                isMounted && setTimeout(()=>{
                    setIsLoading(false)
                },2000)
            }
        }
        fetchData(dataUrl)
        const cleanUp = ()=>{
            isMounted=false
            source.cancel()
        }
        return cleanUp
    },[dataUrl])

    return {data, fetchError, isLoading}
}

export default useAxiosFetch