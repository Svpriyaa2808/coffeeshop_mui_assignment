import MenuCardDisplay from "@/components/MenuCardDisplay"
import { snackMenu } from "@/data/data"

const Breakfast = () => {
    return (
        <MenuCardDisplay menu={snackMenu} type="breakfast"/>
    )
}

export default Breakfast