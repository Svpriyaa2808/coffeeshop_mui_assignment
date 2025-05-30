'use client'
import * as React from 'react';
import MenuCardDisplay from "@/components/MenuCardDisplay"
import {pastryMenu} from "@/data/data"

const Pastry = () => {

    const [open, setOpen] = React.useState(false);
    
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
        <MenuCardDisplay menu={pastryMenu} type="pastry" openFunction={handleClickOpen} closeFunction={handleClose}/>
        
        </>
    )
}

export default Pastry
