import { selectedMenu } from "@/data/data"
import { PastryType } from "@/types/type";

type pastryProp = Promise<{ pastry: string }>;

export default async function PastryPage ({params}: {params: pastryProp}) { 
    const {pastry} =  await params;
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
