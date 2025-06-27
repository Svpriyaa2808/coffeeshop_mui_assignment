import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { MenuType } from '@/types/type';

const style = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  height: '500px',
  width: '300px',
  mb:4,
  transform: 'translate(-50%, -50%)',
  bgcolor: '#E2FADB',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

type ModalProps = {
    closeDialog : ()=> void,
    open : boolean,
    selected : MenuType
}

export default function TransitionsModal({closeDialog,open,selected}:ModalProps) {
  return (
    <div >      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={closeDialog}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{
          textAlign : 'center',
          fontFamily: "Almendra",
            fontStyle:"italic",
            fontWeight:"700",
            color:"#832232",
            m:4
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h2" component="h2"
            sx={{
              fontSize : "20px",
              fontWeight: "bold",
              fontStyle: "italic",
            }}>
              {selected.name}
            </Typography>
            <Typography component="img" src={selected.image} 
            sx={{width: '150px',
            }}
            >
            </Typography>
            <Typography id="transition-modal-title" variant='h4' component='h4'
            sx={{
              textAlign: 'left',
              fontSize : '18px',
              textDecoration: 'underline',
              fontWeight:'bold'
            }}>
              Preparation:
            </Typography>
            <Typography id="transition-modal-description" sx={{ m: 4,
              mt:2,
              textAlign:'justify',
              color:'black',
              fontSize : '16px',
             }}>
              {selected.preparation}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
