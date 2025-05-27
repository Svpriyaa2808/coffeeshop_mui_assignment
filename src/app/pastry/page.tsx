import MenuCardDisplay from "@/components/MenuCardDisplay"
import {pastryMenu} from "@/data/data"
import Image from "next/image"
import Link from "next/link"

const Pastry = () => {

    return (
        <>
        <MenuCardDisplay menu={pastryMenu} type="pastry"/>
        
        </>
    )
}

export default Pastry
