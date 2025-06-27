'use client'
import SelectedSingleMenu from "@/components/SelectedSingleMenu";
import CustomizedDialogs from "@/components/SelectedSingleMenu";
import { selectedMenu } from "@/data/data"
import { MenuType } from "@/types/type";
import { useRouter } from "next/navigation";
type pastryProp = Promise<{ pastry: string }>;

export default async function PastryPage ({params}: {params: pastryProp}) { 
    const {pastry} =  await params;
        const clickedPastry  = decodeURIComponent (pastry)
        const selectedPastry : MenuType | undefined = selectedMenu(clickedPastry) 

        const router = useRouter();
 const handleclose = () => {
  router.push("/")
 }
    return(
        <>
        {selectedPastry && <SelectedSingleMenu menu={selectedPastry} type="pastry" closeFunction={handleclose}/>}
        </>
    )
}
