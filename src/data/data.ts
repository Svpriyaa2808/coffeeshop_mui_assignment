import {MenuType} from '@/types/type'

export const pastryMenu: MenuType[] = [
  {
    name: "Carrot Muffin",
    price: 3.25,
    description: "Moist muffin made with fresh carrots, warm spices, and chopped walnuts.",
    image: "carrot_muffin.jpeg",
    preparation: "Fresh carrots are finely grated and mixed with flour, eggs, sugar, and a blend of cinnamon and nutmeg. Chopped walnuts are folded in for added texture. The batter is portioned into muffin tins and baked at 180°C (350°F) until light and fluffy with a golden top."
  },
  {
    name: "Pecan Sweet Crumb",
    price: 3.75,
    description: "Soft coffee cake topped with a buttery pecan crumble.",
    image: "pecan_crumb.jpeg",
    preparation: "The base is a light coffee-flavored sponge made with butter, sugar, and sour cream. The topping is a mix of chopped pecans, brown sugar, butter, and cinnamon. It’s baked until the crumb is crisp and golden while the inside stays soft and moist."
  },
  {
    name: "Croissant",
    price: 2.75,
    description: "Classic French pastry with flaky, buttery layers baked to golden perfection.",
    image: "crossiant.jpeg",
    preparation: "Croissant dough is layered with cold butter through a process called lamination. After multiple folds and resting stages, the dough is rolled out, cut into triangles, shaped into croissants, and proofed. Finally, they're baked at high heat for flaky, golden layers."
  },
  {
    name: "Vegan Blueberry Pie",
    price: 4.5,
    description: "Plant-based pie filled with juicy blueberries in a tender, flaky crust.",
    image: "vegan_blueberry.jpeg",
    preparation: "Fresh blueberries are tossed with sugar, lemon juice, and cornstarch to create a sweet filling. The vegan pie crust is made with plant-based butter and flour, then filled and baked until the crust turns golden and the filling bubbles."
  },
  {
    name: "Vanilla Bun",
    price: 3.0,
    description: "Soft and sweet bun with a smooth vanilla custard center.",
    image: "vanilla_bun.jpeg",
    preparation: "Enriched dough is prepared with milk, sugar, and butter. A vanilla custard is piped into the center before baking. The buns are baked until golden and served with a light dusting of powdered sugar."
  },
  {
    name: "Cardamom Bun",
    price: 3.5,
    description: "Swirled yeast bun flavored with aromatic cardamom and a hint of sugar glaze.",
    image: "cardamom_bun.jpeg",
    preparation: "A yeast-based dough is flavored with crushed cardamom seeds. After rolling out, the dough is spread with butter and sugar, twisted into a swirl, and baked. Finally, a light sugar glaze is brushed on top for extra sweetness."
  },
  {
    name: "Cinnamon Bun",
    price: 3.5,
    description: "Sticky and sweet roll swirled with cinnamon filling and topped with icing.",
    image: "cinnamon_bun.jpeg",
    preparation: "Soft dough is rolled out, layered with a mixture of cinnamon, brown sugar, and butter, then rolled up and sliced. The buns are baked until golden and then topped with a creamy icing drizzle."
  },
  {
    name: "Mousse Cake - Cookies & Cream",
    price: 4.75,
    description: "Light cookies & cream mousse layered over a chocolate sponge base.",
    image: "mousse.jpeg",
    preparation: "A soft chocolate sponge forms the base layer, topped with a light whipped mousse mixed with crushed chocolate cookies. The cake is chilled until set and then garnished with extra cookie crumbles."
  },
  {
    name: "Mini Brownie",
    price: 2.25,
    description: "Rich and fudgy chocolate brownie in a bite-sized portion.",
    image: "mini_brownie.jpeg",
    preparation: "High-quality dark chocolate and butter are melted together and mixed with sugar, eggs, and flour. The batter is baked in small molds to create dense, fudgy mini brownies with a crackly top."
  }
];

export const snackMenu: MenuType[] = [
  {
    name: "Scones",
    price: 3.0,
    description: "Buttery and crumbly baked scone, perfect with jam or coffee.",
    image: "scones.jpeg",
    preparation: "A mix of flour, cold butter, sugar, and cream is gently kneaded until just combined. The dough is cut into rounds and baked until golden brown, creating a soft, crumbly texture."
  },
  {
    name: "Gluten-Free Roll",
    price: 3.25,
    description: "Soft and chewy roll made with gluten-free flour blend, ideal for sensitive diets.",
    image: "gluten-free-roll.jpeg",
    preparation: "A blend of gluten-free flours is combined with yeast, water, olive oil, and a touch of honey. The dough is shaped into rolls, left to rise, and baked until soft inside with a lightly crisp crust."
  },
  {
    name: "Sourdough Sandwich - Tomato & Avocado",
    price: 5.5,
    description: "Toasted sourdough filled with ripe avocado, fresh tomato, and a touch of olive oil.",
    image: "sourdough_tomato.jpeg",
    preparation: "Thick slices of freshly baked sourdough bread are lightly toasted. Ripe avocado slices and juicy tomatoes are layered inside with a drizzle of olive oil, salt, and pepper for added flavor."
  },
  {
    name: "Sourdough Sandwich Cheese & Turkey",
    price: 5.5,
    description: "Sourdough bread with cheese, turkey, cream cheese and vegetables.",
    image: "sourdough_cheese.jpeg",
    preparation: "Fresh sourdough bread is spread with cream cheese and layered with slices of smoked turkey and cheddar cheese. Fresh vegetables like lettuce and tomato are added for crunch, then the sandwich is toasted lightly."
  },
  {
    name: "Greek Yogurt with Agave",
    price: 3.75,
    description: "Creamy Greek yogurt drizzled with natural agave syrup for a light, sweet snack.",
    image: "agave.jpeg",
    preparation: "Thick and creamy Greek yogurt is spooned into a bowl and drizzled with organic agave syrup for a touch of natural sweetness. Optionally topped with seeds or granola."
  },
  {
    name: "Greek Yogurt with Strawberries",
    price: 4.0,
    description: "Greek yogurt topped with fresh sliced strawberries — simple and refreshing.",
    image: "strawberryyogurt.jpeg",
    preparation: "Freshly sliced strawberries are layered over creamy Greek yogurt. Optionally finished with a drizzle of honey or a sprinkle of granola for extra texture and flavor."
  }
];

  
 export const selectedMenu = (name:string):MenuType | undefined => {
  return  pastryMenu.find(item => item.name.toLowerCase() === name.toLowerCase()) 
 }

 console.log(selectedMenu("Carrot Muffin"))