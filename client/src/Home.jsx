import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  useEffect(()=>{
    const createdoc=async ()=>{
      try{
        const res=await fetch(`http://localhost:5000/api/document`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          title:"New Document",
          content:""
        })

      })
      const data=await res.json()
      console.log(data)
      navigate(`/document/${data._id}`)
    }
      
      catch(err){
        console.log(err)
      }
    }
    createdoc()
  },[])
  return (
    <h1>Creating Document...</h1>
  )
}

export default Home 
