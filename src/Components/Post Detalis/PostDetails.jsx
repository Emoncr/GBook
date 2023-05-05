import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { useParams } from 'react-router-dom';
import Comment from '../Post Comment/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const PostDetails = () => {
  const param = useParams();
  const paramPostId = param.postId

  const [post, setPost] = useState([])
  const [comment, setComment] = useState([])
  const [commentImg , setCommentImg] = useState({})
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${paramPostId}`)
      const response = await res.json()
      return response;
    }
    getData().then((data) => {
      setComment(data)
    })

    const loadPost = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${paramPostId}`);
      const response = await res.json();
      return response
    }
    loadPost().then((post) => {
      setPost(post)
    })

    const loadCommentImg = async ()=>{
      const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${paramPostId}`)
      const response = await res.json();
      return response
    }
    loadCommentImg().then((img) => {
      setCommentImg(img)
    })

  }, [])
  const { id, body, title } = post
  console.log(commentImg);
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 1, pb: 5, pl: 5, pr: 5, rowGap: 3 }} >
        <Grid item xs={12} sm={6} md={4} sx={{ pl: "0 !important", flexBasis: "100% !important", maxWidth: "100%!important" }} >
          <Card sx={{ minWidth: 275, pl: 2, pt: 0, pb: 2, height: "100%", border: "1px solid #1565c096", bgcolor: "#eee6e4" }}>
            <CardContent>
              <Typography sx={{ fontSize: 36, fontWeight: 700 }} color="text.primary" gutterBottom>
                {title}
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 2 }} variant="body2">
                ID:{id}
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 400 }} variant="body2">
                {body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ fontSize: 14, textTransform: "Capitalize" }} variant='outlined' size="small"> <ThumbUpIcon/></Button>
              <Button sx={{ fontSize: 14, textTransform: "Capitalize" }} variant='outlined' size="small"> <ThumbDownIcon/></Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
      <Grid spacing={2} sx={{ mt: 1, pb: 10, pl: 5, pr: 5,flexBasis: "100% !important", maxWidth: "100%!important" }} >
        {
          comment.map((c) => <Comment key={c.id} commentData={c} commentImg={commentImg.photo}  />)
        }
      </Grid>
    </>
  )
}

export default PostDetails