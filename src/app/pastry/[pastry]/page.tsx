import SelectedSingleMenu from "@/components/SelectedSingleMenu";
import CustomizedDialogs from "@/components/SelectedSingleMenu";
import { selectedMenu } from "@/data/data"
import { MenuType } from "@/types/type";

type pastryProp = Promise<{ pastry: string }>;

export default async function PastryPage ({params}: {params: pastryProp}) { 
    const {pastry} =  await params;
        const clickedPastry  = decodeURIComponent (pastry)
        const selectedPastry : MenuType | undefined = selectedMenu(clickedPastry) 
    return(
        <>
        {selectedPastry && <SelectedSingleMenu menu={selectedPastry} />}
        </>
    )
}
