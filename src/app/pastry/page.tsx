import {pastryMenu} from "@/data/data"
import Image from "next/image"
import Link from "next/link"
const Pastry = () => {

    return (
        <>
        {pastryMenu.map((item, index:number) => 
            <div key={index}>
                <p>{item.name}</p>
                <Link href={`/pastry/${item.name.toLowerCase()}`}>
            <Image src={`/${item.image}`} alt={item.name} width={500} height={500} />
            </Link>
            </div>
        )}
        
        </>
    )
}

export default Pastry