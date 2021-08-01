import React, { useState } from 'react'
import {List,ListItem,ListItemText} from '@material-ui/core'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input,setInput] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo =(_event)=>{
    db.collection('todos').doc(props.todo.id).set({
      todo:input
    },{merge:true})
    setOpen(false);
  }

  
}

function Todo(props){
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="DeadLine"></ListItemText>
            </ListItem>
            <div>
                <Button type="button" onClick={handleOpen}>Edit</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }} >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        <input value={input} onChange={(event)=> setInput(event.target.value)}/>
                        <Button onClick={ () => setOpen(false)}>Update Todo</Button>
                    </div>
                    </Fade>
                </Modal>
            </div>

            <DeleteIcon onClick={event=> db.collection('todos').doc(props.todo.id).delete()}></DeleteIcon>
        </List>
        )
    }

export default Todo


