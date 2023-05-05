import React, { useEffect, useState } from 'react'
import { Container, Box, Grid } from '@mui/material'
import Cards from '../Cards/Cards';



const Body = () => {

  const [posts, setPost] = useState([]);
  useEffect(()=>{
    const loadData = async ()=>{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = res.json()
      return response 
    }
    loadData().then((data)=>{
      const reduceData = data.slice(0,35)
      setPost(reduceData)
    })
  },[])


  return (
    <Grid container spacing={2} sx={{mt:1,pb:10, pl:2, pr: 2, rowGap:3, }} >
      {
        posts.map(post=> <Cards key={post.id} post={post}/>)
      }
    </Grid>

  )
}

export default Body