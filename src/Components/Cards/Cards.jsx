import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';




const Cards = ({ post }) => {
    const { title, body, id, userId } = post
    const titleSort = title.slice(0, 10);
    const contentSort = body.slice(0, 100);
    const readMore = contentSort.concat("...")

    return (
        <Grid item xs={12} sm={6} md={4}  >
            <Card sx={{ minWidth: 275, pl: 2, pt: 0, pb: 2, height: "100%", border: "1px solid #1565c096", bgcolor: "#eee6e4" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 22, fontWeight: 700 }} color="text.primary" gutterBottom>
                        {titleSort}
                    </Typography>
                    <Typography variant="body2">
                        {readMore}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/posts/${id}`}>
                        <Button sx={{ fontSize: 14, textTransform: "Capitalize" }} variant='contained' size="small">Read More...</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Cards