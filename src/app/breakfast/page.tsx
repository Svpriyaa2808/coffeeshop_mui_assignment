'use client'
import * as React from 'react';
import MenuCardDisplay from "@/components/MenuCardDisplay"
import {snackMenu} from "@/data/data"
import { MenuType } from "@/types/type"
import SelectedProduct from '@/components/SelectedProduct';

const Breakfast = () => {

     const [open, setOpen] = React.useState(false);
        const [chosenProduct,setChosenProduct] = React.useState<MenuType|null>(null)
        
        const handleClose = () => setOpen(false);
        
        const chosenMenu = (item: MenuType) => {
            setChosenProduct(item);
            console.log(item);
            setOpen(true);
        }

    return (
        <>
            <MenuCardDisplay menu={snackMenu}  clickedProduct={chosenMenu}/>
            {open && chosenProduct && <SelectedProduct closeDialog={handleClose} open={open} selected={chosenProduct}/>}
        </>
    )
}

export default Breakfast