import MenuCardDisplay from "@/components/MenuCardDisplay"
import {pastryMenu} from "@/data/data"
import { MenuType } from "@/types/type"

const Pastry = () => {
 
    return (
        <>
        <MenuCardDisplay menu={pastryMenu} type="pastry" />
        </>
    )
}

export default Pastry
