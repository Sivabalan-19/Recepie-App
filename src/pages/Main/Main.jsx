import React, { useEffect, useState } from "react";
import useMealStore from "../../Store/random";
import SearchBar from "../../components/Search/Search";
import { SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Main() {
  const {
    meals,
    loading,
    fetchMultipleMeals,
    search,
    fetchSearchMeal,
    fetchMealById,
    changevalue,
  } = useMealStore();

  const meal = [
    {
      idMeal: "52848",
      strMeal: "Bean & Sausage Hotpot",
      strDrinkAlternate: null,
      strCategory: "Miscellaneous",
      strArea: "British",
      strInstructions:
        "In a large casserole, fry the sausages until brown all over – about 10 mins.\r\n\r\nAdd the tomato sauce, stirring well, then stir in the beans, treacle or sugar and mustard. Bring to the simmer, cover and cook for 30 mins. Great served with crusty bread or rice.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=B0YX0yPX4Wo",
      strIngredient1: "Sausages",
      strIngredient2: "Tomato Sauce",
      strIngredient3: "Butter Beans",
      strIngredient4: "Black Treacle",
      strIngredient5: "English Mustard",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "8 large",
      strMeasure2: "1 Jar",
      strMeasure3: "1200g",
      strMeasure4: "1 tbls",
      strMeasure5: "1 tsp ",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
      strMeasure10: "",
      strMeasure11: "",
      strMeasure12: "",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: "",
      strMeasure17: "",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource:
        "https://www.bbcgoodfood.com/recipes/339607/bean-and-sausage-hotpot",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "52960",
      strMeal: "Salmon Avocado Salad",
      strDrinkAlternate: null,
      strCategory: "Seafood",
      strArea: "British",
      strInstructions:
        "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1549542994.jpg",
      strTags: "Paleo,Keto,LowCarbs,Salad,Alcoholic,Halloween,",
      strYoutube: "https://www.youtube.com/watch?v=FJiu2S0Xap0",
      strIngredient1: "Salmon",
      strIngredient2: "Avocado",
      strIngredient3: "Cucumber",
      strIngredient4: "Spinach",
      strIngredient5: "Mint",
      strIngredient6: "Lime",
      strIngredient7: "Honey",
      strIngredient8: "Olive Oil",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "400g",
      strMeasure2: "3",
      strMeasure3: "1",
      strMeasure4: "400g",
      strMeasure5: "4 tbs",
      strMeasure6: "zest and juice of 1",
      strMeasure7: "2 tsp",
      strMeasure8: "3 tbs",
      strMeasure9: "",
      strMeasure10: "",
      strMeasure11: "",
      strMeasure12: "",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: "",
      strMeasure17: "",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource:
        "https://www.bbcgoodfood.com/recipes/4521/salmon-avocado-and-cucumber-salad",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "52886",
      strMeal: "Spotted Dick",
      strDrinkAlternate: null,
      strCategory: "Dessert",
      strArea: "British",
      strInstructions:
        "Put the flour and salt in a bowl. Add the suet, currants, sugar, lemon and orange zest.\r\nPour in 150ml milk and mix to a firm but moist dough, adding the extra milk if necessary.\r\nShape into a fat roll about 20cm long. Place on a large rectangle of baking parchment. Wrap loosely to allow for the pudding to rise and tie the ends with string like a Christmas cracker.\r\nPlace a steamer over a large pan of boiling water, add the pudding to the steamer, cover and steam for 1 1/2 hours. Top up the pan with water from time to time.\r\nRemove from the steamer and allow to cool slightly before unwrapping. Serve sliced with custard.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xqvyqr1511638875.jpg",
      strTags: "Fruity,Pudding,Desert",
      strYoutube: "https://www.youtube.com/watch?v=fu15XOF-ros",
      strIngredient1: "Self-raising Flour",
      strIngredient2: "Salt",
      strIngredient3: "Suet",
      strIngredient4: "Currants",
      strIngredient5: "Caster Sugar",
      strIngredient6: "Lemon",
      strIngredient7: "Orange",
      strIngredient8: "Milk",
      strIngredient9: "Custard",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "250g",
      strMeasure2: "pinch",
      strMeasure3: "125g",
      strMeasure4: "175g",
      strMeasure5: "80g",
      strMeasure6: "Zest of 1",
      strMeasure7: "Zest of 1",
      strMeasure8: "150ml",
      strMeasure9: "to serve",
      strMeasure10: "",
      strMeasure11: "",
      strMeasure12: "",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: "",
      strMeasure17: "",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource: "https://www.bbcgoodfood.com/recipes/2686661/spotted-dick",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "52947",
      strMeal: "Ma Po Tofu",
      strDrinkAlternate: null,
      strCategory: "Beef",
      strArea: "Chinese",
      strInstructions:
        "Add a small pinch of salt and sesame oil to minced beef. Mix well and set aside.\r\nMix 1 tablespoon of cornstarch with 2 and ½ tablespoons of water in a small bowl to make water starch.\r\nCut tofu into square cubes (around 2cms). Bring a large amount of water to a boil and then add a pinch of salt. Slide the tofu in and cook for 1 minute. Move out and drain.\r\nGet a wok and heat up around 2 tablespoons of oil, fry the minced meat until crispy. Transfer out beef out and leave the oil in.\r\nFry doubanjiang for 1 minute over slow fire and then add garlic, scallion white, ginger and fermented black beans to cook for 30 seconds until aroma. Then mix pepper flakes in.\r\nAdd water to the seasonings and bring to boil over high fire. Gently slide the tofu cubes. Add light soy sauce and beef.Slow the heat after boiling and then simmer for 6-8 minutes. Then add chopped garlic greens.\r\nStir the water starch and then pour half of the mixture to the simmering pot. Wait for around 30 seconds and then pour the other half. You can slightly taste the tofu and add pinch of salt if not salty enough. By the way, if you feel it is too spicy, add some sugar can milder the taste. But be carefully as the broth is very hot at this point.\r\nTransfer out when almost all the seasonings stick to tofu cubes. Sprinkle Szechuan peppercorn powder (to taste)and chopped garlic greens if using.\r\nServe immediately with steamed rice.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1525874812.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=IhwPQL9dFYc",
      strIngredient1: "Tofu",
      strIngredient2: "Minced Beef",
      strIngredient3: "Sesame Seed Oil",
      strIngredient4: "Doubanjiang",
      strIngredient5: "Fermented Black Beans",
      strIngredient6: "Pepper",
      strIngredient7: "Salt",
      strIngredient8: "Sichuan pepper",
      strIngredient9: "Soy Sauce",
      strIngredient10: "Water",
      strIngredient11: "Olive Oil",
      strIngredient12: "Scallions",
      strIngredient13: "Spring Onions",
      strIngredient14: "Garlic",
      strIngredient15: "Ginger",
      strIngredient16: "Water",
      strIngredient17: "Cornstarch",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "450g",
      strMeasure2: "100g ",
      strMeasure3: "1/2 tbs",
      strMeasure4: "1 1/2 tsp ",
      strMeasure5: "1/2 tsp",
      strMeasure6: "1 tbs",
      strMeasure7: "1/2 tsp",
      strMeasure8: "1/2 tsp",
      strMeasure9: "1 tbs",
      strMeasure10: "400ml",
      strMeasure11: "2 tbs",
      strMeasure12: "2 chopped",
      strMeasure13: "4",
      strMeasure14: "2 cloves chopped",
      strMeasure15: "4 sliced",
      strMeasure16: "2 1/2 tbs",
      strMeasure17: "1 tbs",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource: "https://www.chinasichuanfood.com/mapo-tofu-recipe/",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "52781",
      strMeal: "Irish stew",
      strDrinkAlternate: null,
      strCategory: "Beef",
      strArea: "Irish",
      strInstructions:
        "Heat the oven to 180C/350F/gas mark 4. Drain and rinse the soaked wheat, put it in a medium pan with lots of water, bring to a boil and simmer for an hour, until cooked. Drain and set aside.\r\n\r\nSeason the lamb with a teaspoon of salt and some black pepper. Put one tablespoon of oil in a large, deep sauté pan for which you have a lid; place on a medium-high heat. Add some of the lamb – don't overcrowd the pan – and sear for four minutes on all sides. Transfer to a bowl, and repeat with the remaining lamb, adding oil as needed.\r\n\r\nLower the heat to medium and add a tablespoon of oil to the pan. Add the shallots and fry for four minutes, until caramelised. Tip these into the lamb bowl, and repeat with the remaining vegetables until they are all nice and brown, adding more oil as you need it.\r\n\r\nOnce all the vegetables are seared and removed from the pan, add the wine along with the sugar, herbs, a teaspoon of salt and a good grind of black pepper. Boil on a high heat for about three minutes.\r\n\r\nTip the lamb, vegetables and whole wheat back into the pot, and add the stock. Cover and boil for five minutes, then transfer to the oven for an hour and a half.\r\n\r\nRemove the stew from the oven and check the liquid; if there is a lot, remove the lid and boil for a few minutes.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg",
      strTags: "Stew,Meat",
      strYoutube: "https://www.youtube.com/watch?v=kYH2qJXnSMo",
      strIngredient1: "whole wheat",
      strIngredient2: "lamb loin chops",
      strIngredient3: "olive oil",
      strIngredient4: "shallots",
      strIngredient5: "Carrots",
      strIngredient6: "turnips",
      strIngredient7: "celeriac",
      strIngredient8: "charlotte potatoes",
      strIngredient9: "white wine",
      strIngredient10: "caster sugar",
      strIngredient11: "fresh thyme",
      strIngredient12: "oregano",
      strIngredient13: "chicken stock",
      strIngredient14: null,
      strIngredient15: null,
      strIngredient16: null,
      strIngredient17: null,
      strIngredient18: null,
      strIngredient19: null,
      strIngredient20: null,
      strMeasure1: "300g soaked overnight in water",
      strMeasure2: "2kg cut into 3cm cubes",
      strMeasure3: "120ml",
      strMeasure4: "24 Skinned",
      strMeasure5: "4 large",
      strMeasure6: "2",
      strMeasure7: "1",
      strMeasure8: "350g",
      strMeasure9: "150ml",
      strMeasure10: "1 tsp",
      strMeasure11: "4 sprigs",
      strMeasure12: "4 sprigs",
      strMeasure13: "450ml",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: null,
      strMeasure17: null,
      strMeasure18: null,
      strMeasure19: null,
      strMeasure20: null,
      strSource: "http://www.ottolenghi.co.uk/recipes/meat/irish-stew-shop",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "53021",
      strMeal: "Golabki (cabbage roll)",
      strDrinkAlternate: null,
      strCategory: "Beef",
      strArea: "Polish",
      strInstructions:
        "Bring a large pot of lightly salted water to a boil. Place cabbage head into water, cover pot, and cook until cabbage leaves are slightly softened enough to remove from head, 3 minutes. Remove cabbage from pot and let cabbage sit until leaves are cool enough to handle, about 10 minutes.\r\n\r\nRemove 18 whole leaves from the cabbage head, cutting out any thick tough center ribs. Set whole leaves aside. Chop the remainder of the cabbage head and spread it in the bottom of a casserole dish.\r\n\r\nMelt butter in a large skillet over medium-high heat. Cook and stir onion in hot butter until tender, 5 to 10 minutes. Cool.\r\n\r\nStir onion, beef, pork, rice, garlic, 1 teaspoon salt, and 1/4 teaspoon pepper together in a large bowl.\r\n\r\nPreheat oven to 350 degrees F (175 degrees C).\r\n\r\nPlace about 1/2 cup beef mixture on a cabbage leaf. Roll cabbage around beef mixture, tucking in sides to create an envelope around the meat. Repeat with remaining leaves and meat mixture. Place cabbage rolls in a layer atop the chopped cabbage in the casserole dish; season rolls with salt and black pepper.\r\n\r\nWhisk tomato soup, tomato juice, and ketchup together in a bowl. Pour tomato soup mixture over cabbage rolls and cover dish wish aluminum foil.\r\n\r\nBake in the preheated oven until cabbage is tender and meat is cooked through, about 1 hour.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=rBrTkDdoPYg",
      strIngredient1: "Cabbage",
      strIngredient2: "Butter",
      strIngredient3: "Onion",
      strIngredient4: "Ground Beef",
      strIngredient5: "Ground Pork",
      strIngredient6: "Rice",
      strIngredient7: "Garlic",
      strIngredient8: "Salt",
      strIngredient9: "Black Pepper",
      strIngredient10: "Tomato Puree",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "1",
      strMeasure2: "2 tbs",
      strMeasure3: "1 chopped",
      strMeasure4: "1 lb",
      strMeasure5: "1/2 lb",
      strMeasure6: "1 1/2 cups ",
      strMeasure7: "1 tsp ",
      strMeasure8: "1 tsp ",
      strMeasure9: "1/4 tsp",
      strMeasure10: "3 cans",
      strMeasure11: " ",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource:
        "https://www.allrecipes.com/recipe/234975/golabki-stuffed-cabbage-rolls/",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "53005",
      strMeal: "Strawberry Rhubarb Pie",
      strDrinkAlternate: null,
      strCategory: "Dessert",
      strArea: "British",
      strInstructions:
        "Pie Crust:  In a food processor, place the flour, salt, and sugar and process until combined. Add the butter and process until the mixture resembles coarse\r\n\r\nmeal (about 15 seconds). Pour 1/4 cup (60 ml) water in a slow, steady stream, through the feed tube until the dough just holds together when pinched. If necessary, add more water. Do not process more than 30 seconds.\r\nTurn the dough onto your work surface and gather into a ball. Divide the dough in half, flattening each half into a disk, cover with plastic wrap, and refrigerate for about one hour before using. This will chill the butter and relax the gluten in the flour. \r\n\r\nAfter the dough has chilled sufficiently, remove one portion of the dough from the fridge and place it on a lightly floured surface.  Roll the pastry into a 12 inch (30 cm) circle. (To prevent the pastry from sticking to the counter and to ensure uniform thickness, keep lifting up and turning the pastry a quarter turn as you roll (always roll from the center of the pastry outwards).)  Fold the dough in half and gently transfer to a 9 inch (23 cm) pie pan. Brush off any excess flour and trim any overhanging pastry to an edge of 1/2 inch (1.5 cm). Refrigerate the pastry, covered with plastic wrap, while you make the filling. \r\n\r\nRemove the second round of pastry and roll it into a 13 inch (30 cm) circle. Using a pastry wheel or pizza cutter, cut the pastry into about 3/4 inch (2 cm) strips. Place the strips of pastry on a parchment paper-lined baking sheet, cover with plastic wrap, and place in the refrigerator for about 10 minutes. \r\n\r\nMake the Strawberry Rhubarb Filling: Place the cut strawberries and rhubarb in a large bowl. In a small bowl mix together the cornstarch, sugar, and ground cinnamon. \r\n\r\nRemove the chilled pie crust from the fridge. Sprinkle about 2 tablespoons of the sugar mixture over the bottom of the pastry crust. Add the remaining sugar mixture to the strawberries and rhubarb and gently toss to combine. Pour the fruit mixture into the prepared pie shell. Sprinkle the fruit with about 1 teaspoon of lemon juice and dot with 2 tablespoons of butter.\r\n\r\nRemove the lattice pastry from the refrigerator and, starting at the center with the longest strips and working outwards, place half the strips, spacing about 1 inch (2.5 cm) apart, on top of the filling. (Use the shortest pastry strips at the outer edges.) Then, gently fold back, about halfway, every other strip of pastry. Take another strip of pastry and place it perpendicular on top of the first strips of pastry. Unfold the bottom strips of pastry and then fold back the strips that weren't folded back the first time. Lay another strip of pastry perpendicular on top of the filling and then continue with the remaining strips. Trim the edges of the pastry strips, leaving a 1 inch (2.5 cm) overhang. Seal the edges of the pastry strips by folding them under the bottom pastry crust and flute the edges of the pastry. Brush the lattice pastry with milk and sprinkle with a little sugar. Cover and place in the refrigerator while you preheat the oven to 400 degrees F (205 degrees C) and place the oven rack in the lower third of the oven. Put a baking sheet, lined with aluminum foil, on the oven rack (to catch any spills.)\r\n\r\nPlace the pie plate on the hot baking sheet and bake the pie for about 35 minutes and then, if the edges of the pie are browning too much, cover with a foil ring. Continue to bake the pie for about another 10 minutes or until the crust is a golden brown color and the fruit juices begin to bubble.\r\n\r\nRemove the pie from the oven and place on a wire rack to cool for several hours. Serve at room temperature with softly whipped cream or vanilla ice cream. Leftovers can be stored in the refrigerator for about 3 days. Reheat before serving. This pie can be frozen.\r\n\r\nMakes one 9 inch (23 cm) pie.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/178z5o1585514569.jpg",
      strTags: "Pudding,Pie,Baking,Fruity,Glazed",
      strYoutube: "https://www.youtube.com/watch?v=tGw5Pwm4YA0",
      strIngredient1: "Flour",
      strIngredient2: "Salt",
      strIngredient3: "Sugar",
      strIngredient4: "Butter",
      strIngredient5: "Water",
      strIngredient6: "Rhubarb",
      strIngredient7: "Strawberries",
      strIngredient8: "Cornstarch",
      strIngredient9: "Sugar",
      strIngredient10: "Cinnamon",
      strIngredient11: "Lemon Juice",
      strIngredient12: "Unsalted Butter",
      strIngredient13: "Milk",
      strIngredient14: "Sugar",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "350g",
      strMeasure2: "1 tsp ",
      strMeasure3: "2 tbs",
      strMeasure4: "1 cup ",
      strMeasure5: "1/2 cup ",
      strMeasure6: "450g",
      strMeasure7: "450g",
      strMeasure8: "3 tbs",
      strMeasure9: "150g",
      strMeasure10: "1/4 tsp",
      strMeasure11: "1 tsp ",
      strMeasure12: "2 tbs",
      strMeasure13: "2 tbs",
      strMeasure14: "Spinkling",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource: "https://www.joyofbaking.com/StrawberryRhubarbPie.html",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "53082",
      strMeal: "Strawberries Romanoff",
      strDrinkAlternate: null,
      strCategory: "Dessert",
      strArea: "Russian",
      strInstructions:
        "In a medium bowl, combine hulled and quartered strawberries, 4 Tbsp sugar and 4 Tbsp liqueur, stir to combine then cover and refrigerate at least 1 hour and up to 2 hours, stirring once or twice.\r\n\r\nTwo photos of cut strawberries in a bowl with one having sugar being added to the bowl Two photos of cut up strawberries for Strawberry Romanoff \r\n\r\nJust before serving, in a large mixing bowl, combine 1 cup cold heavy cream and 1/4 cup powdered sugar, and beat with an electric mixer until stiff peaks form. Using a spatula, fold in 1/4 cup sour cream just until well blended.\r\n\r\nTo serve, stir strawberries then divide between 6 serving glasses or bowls. You can spoon a little syrup over the berries if you like. You can also use this syrup to soak a cake. Spoon cream over strawberries, dividing evenly. You can also use an ice cream scoop with trigger release for a nice rounded puff of cream. Serve right away or chill and enjoy within 2 hours of assembly.\r\n\r\n",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg",
      strTags: "Fruity",
      strYoutube: "https://www.youtube.com/watch?v=ybWHc4Vi-xU",
      strIngredient1: "Strawberries",
      strIngredient2: "Sugar",
      strIngredient3: "Grand Marnier",
      strIngredient4: "Cream",
      strIngredient5: "Sour Cream",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "2 pint ",
      strMeasure2: "4 tbs",
      strMeasure3: "4 tbs",
      strMeasure4: "1 cup ",
      strMeasure5: "1/4 cup",
      strMeasure6: " ",
      strMeasure7: " ",
      strMeasure8: " ",
      strMeasure9: " ",
      strMeasure10: " ",
      strMeasure11: " ",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource: "https://natashaskitchen.com/strawberries-romanoff-recipe/",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "52864",
      strMeal: "Mushroom & Chestnut Rotolo",
      strDrinkAlternate: null,
      strCategory: "Vegetarian",
      strArea: "British",
      strInstructions:
        "Soak the dried mushrooms in 350ml boiling water and set aside until needed. Blitz ¾ of the chestnuts with 150ml water until creamy. Roughly chop the remaining chestnuts.\r\nHeat 2 tbsp olive oil in a large non-stick frying pan. Fry the shallots with a pinch of salt until softened, then add the garlic, chopped chestnuts and rosemary, and fry for 2 mins more. Add the wild mushrooms, 2 tbsp oil and some seasoning. Cook for 3 mins until they begin to soften. Drain and roughly chop the dried mushrooms (reserve the soaking liquid), then add those too, along with the soy sauce, and fry for 2 mins more.\r\nWhisk the wine, reserved mushroom liquid and chestnut cream together to create a sauce. Season, then add half to the mushroom mixture in the pan and cook for 1 min until the sauce becomes glossy. Remove and discard the rosemary sprigs, then set the mixture aside.\r\nHeat oven to 180C/160C fan/gas 4. Bring a large pan of salted water to the boil and get a large bowl of ice water ready. Drop the lasagne sheets into the boiling water for 2 mins or until pliable and a little cooked, then immediately plunge them into the cold water. Using your fingers, carefully separate the sheets and transfer to a clean tea towel. Spread a good spoonful of the sauce on the bottom two thirds of each sheet, then, rolling away from yourself, roll up the shorter ends. Cut each roll in half, then position the rolls of pasta cut-side up in a pie dish that you are happy to serve from at the table. If you have any mushroom sauce remaining after you’ve rolled up all the sheets, simply push it into some of the exposed rolls of pasta.\r\nPour the rest of the sauce over the top of the pasta, then bake for 10 mins or until the pasta no longer has any resistance when tested with a skewer.\r\nMeanwhile, put the breadcrumbs, the last 2 tbsp olive oil, sage leaves and some seasoning in a bowl, and toss everything together. Scatter the rotolo with the crumbs and sage, then bake for another 10 mins, until the top is golden and the sage leaves are crispy. Leave to cool for 10 mins to allow the pasta to absorb the sauce, then drizzle with a little truffle oil, if you like, before taking your dish to the table.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg",
      strTags: "Vegetarian,Nutty",
      strYoutube: "https://www.youtube.com/watch?v=GNN7_ZSJ5YE",
      strIngredient1: "Mushrooms",
      strIngredient2: "Chestnuts",
      strIngredient3: "Challots",
      strIngredient4: "Garlic",
      strIngredient5: "Rosemary",
      strIngredient6: "Wild Mushrooms",
      strIngredient7: "Soy Sauce",
      strIngredient8: "White Wine",
      strIngredient9: "Lasagne Sheets",
      strIngredient10: "Breadcrumbs",
      strIngredient11: "Sage",
      strIngredient12: "Truffle Oil",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "30g",
      strMeasure2: "240g",
      strMeasure3: "3",
      strMeasure4: "3 cloves",
      strMeasure5: "3 sprigs",
      strMeasure6: "500g",
      strMeasure7: "2 tblsp ",
      strMeasure8: "125ml ",
      strMeasure9: "350g",
      strMeasure10: "4 tbsp",
      strMeasure11: "1/2 handful ",
      strMeasure12: "to serve",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: "",
      strMeasure17: "",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource: "https://www.bbcgoodfood.com/recipes/mushroom-chestnut-rotolo",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    fetchSearchMeal("");
  }, []);
  return (
    <div className="flex-1 p-4 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-orange-800">
      <div className="justify-end flex w-full">
        <SearchBar query={search} callfuntion={fetchSearchMeal} />
      </div>
      <div className="text-2xl font-bold text-orange-800 mt-6 mb-4 pb-2 border-b-2 border-orange-500">
        {search
          ? `Seach Result for ${search}`
          : !search
          ? "Explore Latest Meals"
          : ""}
      </div>
      {loading ? (
        // Skeleton Loader when loading
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map(
            (
              _,
              index // Show 6 skeleton cards as an example
            ) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-200 animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300"></div>{" "}
                {/* Skeleton image */}
                <div className="p-4">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>{" "}
                  {/* Skeleton title */}
                  <div className="w-full h-10 bg-gray-300 rounded"></div>{" "}
                  {/* Skeleton button */}
                </div>
              </div>
            )
          )}
        </div>
      ) : meals ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-200"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                {/* Meal Title */}
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  {meal.strMeal}
                </h3>

                {/* Category and Area Chips */}
                <div className="flex space-x-2 mb-4">
                  {meal.strCategory && (
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                      {meal?.strCategory}
                    </span>
                  )}
                  {meal.strArea && (
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {meal?.strArea}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  className="mt-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={() => {
                    navigate(`/${meal.idMeal}/${meal.strMeal}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <div className="bg-orange-100 rounded-full p-6 mb-6">
            <SearchX size={64} className="text-orange-500" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            No recipes found
          </h2>

          {search && (
            <p className="text-gray-600 mb-6">
              We couldn't find any recipes matching "
              <span className="font-medium text-orange-500 italic ">
                {search}
              </span>
              "
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              onClick={() => {
                changevalue("search", ""); // Clear the search state in the Zustand store
                fetchSearchMeal(""); // Clear the search results
              }}
            >
              Clear Search
            </button>
          </div>

          <div className="mt-8 p-4 bg-orange-50 rounded-lg max-w-md">
            <h3 className="font-semibold mb-2 text-gray-700">Suggestions:</h3>
            <ul className="text-gray-600 text-left pl-4">
              <li className="mb-1">• Check your spelling</li>
              <li className="mb-1">• Try more general keywords</li>
              <li className="mb-1">• Try a different search term</li>
              <li>• Browse our categories for inspiration</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
