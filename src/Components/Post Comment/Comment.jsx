import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



const Comment = ({ commentData , commentImg}) => {

    const { name, email, body } = commentData
    const nameSlice = name.slice(0, 30)

    let url ;
    if(commentImg.url){
        url = commentImg.url
        // https://dummyjson.com/users/2  [WILL BE UPDATED TOWWOMORO]
    }
    else{
        url = "https://via.placeholder.com/300x200"
    }

    return (
        <List sx={{ width: '100%', bgcolor: '#E6F7FF' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Commneter Image" src={url} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography sx={{ fontWeight: "600", color: "#333333" }}>
                            {email}
                        </Typography>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline', fontWeight: "700", color: "#555" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {nameSlice}-
                            </Typography>
                            <Typography sx={{ display: 'inline', fontWeight: "400", ml: 1 }}>
                                {body}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>

    )
}

export default Comment