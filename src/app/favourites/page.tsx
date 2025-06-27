'use client';
import { useEffect, useState } from "react";
import { MenuType } from "@/types/type";
import FavouriteDisplay from "@/components/FavouriteDisplay";

export default function FavouritesPage() {
  const [fav, setFav] = useState<MenuType | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("recipe");
    if (stored) {
      setFav(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      {fav ? (
        <>
          <FavouriteDisplay favourite={fav}/>
        </>
      ) : (
        <p>No favourite selected yet.</p>
      )}
    </>
  );
}
