import { selectedMenu } from "@/data/data"
import { PastryType } from "@/types/type";

const RecipePage =  ({params}: {params:{pastry:string}}) =>{ 
    const pastry =  decodeURIComponent(params.pastry);
       const selectedPastry : PastryType | undefined = selectedMenu(pastry) 
       console.log(pastry)
       console.log(selectedPastry) 
    return(
        <>
        <p>{pastry}</p>
         <p>{selectedPastry?.description}</p> 
        </>
    )
}

export default RecipePage