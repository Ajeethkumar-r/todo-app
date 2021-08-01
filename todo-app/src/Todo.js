import React from 'react'
import {List,ListItem,ListItemText,Button} from '@material-ui/core'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props){
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="DeadLine"></ListItemText>
            </ListItem>
            <DeleteIcon onClick={event=> db.collection('todos').doc(props.todo.id).delete()}></DeleteIcon>
        </List>
        )
    }

export default Todo


