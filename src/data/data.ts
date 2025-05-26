import {PastryType} from '@/types/type'

export const pastryMenu:PastryType[] = [
    {
      name: "Carrot Muffin",
      price: 3.25,
      description: "Moist muffin made with fresh carrots, warm spices, and chopped walnuts.",
      image:"carrot_muffin.jpeg",
    },
    {
      name: "Pecan Sweet Crumb",
      price: 3.75,
      description: "Soft coffee cake topped with a buttery pecan crumble.",
      image:"pecan_crumb.jpeg"
    },
    {
      name: "Croissant",
      price: 2.75,
      description: "Classic French pastry with flaky, buttery layers baked to golden perfection.",
      image:"crossiant.jpeg"
    },
    {
      name: "Vegan Blueberry Pie",
      price: 4.5,
      description: "Plant-based pie filled with juicy blueberries in a tender, flaky crust.",
      image:"vegan_blueberry.jpeg",
    },
    {
      name: "Vanilla Bun",
      price: 3.0,
      description: "Soft and sweet bun with a smooth vanilla custard center.",
      image:"vanilla_bun.jpeg",
    },
    {
      name: "Cardamom Bun",
      price: 3.5,
      description: "Swirled yeast bun flavored with aromatic cardamom and a hint of sugar glaze.",
      image:"cardamom_bun.jpeg"
    },
    {
      name: "Cinnamon Bun",
      price: 3.5,
      description: "Sticky and sweet roll swirled with cinnamon filling and topped with icing.",
      image:"cinnamon_bun.jpeg"
    },
    {
      name: "Mousse Cake - Cookies & Cream",
      price: 4.75,
      description: "Light cookies & cream mousse layered over a chocolate sponge base.",
      image:"mousse.jpeg"
    },
    {
      name: "Mini Brownie",
      price: 2.25,
      description: "Rich and fudgy chocolate brownie in a bite-sized portion.",
      image:"mini_brownie.jpeg"
    }
  ];
  
  export const snackMenu = [
    {
      name: "Scones",
      price: 3.0,
      description: "Buttery and crumbly baked scone, perfect with jam or coffee.",
      image:"scones.jpeg"
    },
    {
      name: "Gluten-Free Roll",
      price: 3.25,
      description: "Soft and chewy roll made with gluten-free flour blend, ideal for sensitive diets.",
      image:"gluten-free-roll.jpeg"
    },
    {
      name: "Sourdough Sandwich - Tomato & Avocado",
      price: 5.5,
      description: "Toasted sourdough filled with ripe avocado, fresh tomato, and a touch of olive oil.",
      image:"sourdough_tomato.jpeg"
    },
    {
      name: "Greek Yogurt with Agave",
      price: 3.75,
      description: "Creamy Greek yogurt drizzled with natural agave syrup for a light, sweet snack.",
      image:"agave.jpeg"
    },
    {
      name: "Greek Yogurt with Strawberries",
      price: 4.0,
      description: "Greek yogurt topped with fresh sliced strawberries — simple and refreshing.",
      image:"strawberryyogurt.jpeg"
    }
  ];
  
 export const selectedMenu = (name:string):PastryType | undefined => {
  return  pastryMenu.find(item => item.name.toLowerCase() === name.toLowerCase()) 
 }

 console.log(selectedMenu("Carrot Muffin"))