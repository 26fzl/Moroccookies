import React from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../../components/Recipe/Recipe';
import './MealPage.css'
import food_1 from '../../assets/food_1.png';
import food_2 from '../../assets/food_2.png';
import food_3 from '../../assets/food_3.png';
import food_4 from '../../assets/food_4.png';
import food_5 from '../../assets/food_5.png';
import food_6 from '../../assets/food_6.png';
import food_7 from '../../assets/food_7.png';
import food_8 from '../../assets/food_8.png';
import food_9 from '../../assets/food_9.png';
import food_10 from '../../assets/food_10.png';
import food_11 from '../../assets/food_11.png';
import food_12 from '../../assets/food_12.png';
import food_13 from '../../assets/food_13.png';
import food_14 from '../../assets/food_14.png';
import food_15 from '../../assets/food_15.png';
import food_16 from '../../assets/food_16.png';
import food_17 from '../../assets/food_17.png';
import food_18 from '../../assets/food_18.png';
import food_19 from '../../assets/food_19.png';
import food_20 from '../../assets/food_20.png';




const recipes = {
  'Jam Shortbread Cookies': {
    name: 'Jam Shortbread Cookies',
    description: 'It is simply some jam sandwiched between two shortbread cookies, simple yet very indulgent..',
    ingredients: ['125 g butter', '125 g sugar', '80 g eggs (about 1 egg + 1 yolk)', '250 g all-purpose flour', '1 jar of jam'],
    instructions: 'This recipe makes about 25 jam-filled shortbread cookies. Preparation involves mixing butter, sugar, eggs, and flour to form a smooth dough, which is chilled for 2 hours. After rolling out the dough and cutting it into shapes, bake at 180°C for 8-10 minutes until golden. Once cooled, assemble the cookies by spreading jam on whole cookies and dusting cutout cookies with powdered sugar before sandwiching them together. Enjoy these treats stored at room temperature in a dry place.',
    image: food_1
  },
  'Viennese Shortbread': {
    name: 'Viennese Shortbread',
    description: 'Delicious sablé.',
    ingredients: ['200 g butter', '75 g powdered sugar', '1/4 tsp salt', '1 packet vanilla sugar','1 egg white', '225 g flour', 'For decoration: 80 g melted dark chocolate, 1 tbsp powdered sugar'],
    instructions: 'In a bowl, place the butter with powdered sugar and vanilla sugar. Cream together until smooth. Add the egg white, flour, and salt. Mix gently until a smooth and homogeneous dough forms. Transfer the dough into a fluted piping bag and pipe it into biscuits on a baking sheet lined with parchment paper. Bake the biscuits in a preheated oven at 180°C (350°F) for 15 minutes. Allow the biscuits to cool, then decorate them with powdered sugar or melted dark chocolate. Store the biscuits in an airtight container.',
    image: food_2
  },
  'Zellige': {
    name: 'Zellige',
    description: 'Delicious Moroccan peanut sweet.',
    ingredients: ['400 g unsalted peanuts', '400 g almonds', '300 g honey', '60 g melted butter', 'A handful of sesame seeds', '400 g white chocolate', '200 g dark chocolate', '100 g milk chocolate', 
'2 tablespoons sunflower oil'],
    instructions: 'This recipe begins by lining a rectangular dish with parchment paper and melting dark and milk chocolate together over a double boiler with sunflower oil. After pouring and cooling this chocolate base, unsalted peanuts, sesame seeds, and almonds are roasted, blended, and mixed with melted butter and honey. This nut mixture is then layered over the chocolate base, gently pressed smooth, and chilled. Next, white chocolate is melted with sunflower oil, poured over the nut layer, and spread evenly. Decoratively, melted dark chocolate is piped horizontally and knifed vertically atop the white chocolate layer to resemble a mille-feuille pattern. Once set, the dessert is cut into squares using a hot water-dipped knife for ease, and stored in a cool place for extended freshness.',
    image: food_3
  },
  'Orange and Chocolate Biscuits': {
    name: 'Orange and Chocolate Biscuits',
    description: 'Delicious chocolate sablé.',
    ingredients: ['240 g flour', '100 g butter', '40 g powdered sugar', '1/2 tsp fine salt', '2 egg yolks', 'Zest of one orange', '1 tbsp orange juice', 'For decoration : 40 g sliced almonds, 2 tbsp glaze, 1 tsp glucose, 100 g melted dark chocolate'],
    instructions: 'In a bowl, mix together the butter with the flour, salt, and powdered sugar. Add the egg yolks, orange zest, and orange juice to form a homogeneous dough. Wrap the dough in plastic wrap and let it rest in the refrigerator for 15 minutes. Roll out the dough thinly and cut it into discs using a cookie cutter. Place the cookies on a baking sheet lined with parchment paper. Bake the cookies in a preheated oven at 170°C (340°F) for 12 minutes. Heat the glaze with the glucose, brush half of the cookies surfaces with it, then dip them into the sliced almonds. Sandwich the cookies together in pairs and dip half of each pair into the melted chocolate. Place the cookies on a parchment-lined sheet and allow the chocolate to harden before storing the cookies in an airtight container.',
    image: food_4
  },
  'Almond Gazelle Horn Pastry': {
    name: 'Almond Gazelle Horn Pastry',
    description: 'Delicious almond sweet.',
    ingredients: ['For the dough: 250 g flour, 50 g softened butter, 1 tablespoon oil, 1 teaspoon honey or sugar, A good pinch of salt, 75 ml orange blossom water (adjust as needed based on flour absorption)', 'For the almond paste: 350 g blanched and peeled almonds,170 g granulated sugar, 60 ml orange blossom water (adjust as needed), 20 g butter, 1/4 teaspoon mastic gum arabic (optional), 1/4 teaspoon cinnamon, 1 packet vanilla sugar'],
    instructions: 'To prepare, mix flour, salt, softened butter, oil, and honey or sugar until smooth, adding orange blossom water gradually. Refrigerate the dough, then blend almond powder or blanched almonds with granulated and vanilla sugar in a food processor. Add butter, cinnamon, crushed gum arabic with sugar, and orange blossom water to form an almond paste, shaping it into rolls. Roll reserved dough into balls, flatten into thin sheets, place almond paste rolls on each, fold the dough, and shape into crescents. Prick with a needle, let dry for 12 hours, then bake at 180°C for 10 minutes until barely colored. Cool on a rack after baking.',
    image: food_5
  },
  'Mlowza': {
    name: 'Mlowza',
    description: 'These crackled cookies are so delicious and melt in your mouth.',
    ingredients: ['500 g blanched almonds', '250 g powdered sugar', '1 tablespoon glucose','1 tablespoon orange blossom water', '1 egg', '1 egg yolk', '1 tablespoon softened butter', '7 g baking powder', 'A pinch of ground mastic', 'Decoration: powdered sugar'],
    instructions: 'Grind the almonds with the sugar twice. Mix the almond paste with lemon zest, butter, orange blossom water, glucose, eggs, mastic, and baking powder. Shape small walnut-sized balls from the dough. Roll the balls in powdered sugar. Place the balls on a baking sheet lined with parchment paper and gently flatten them with your thumb. To finish: Bake in a preheated oven at 160°C (320°F) for 10 minutes. Allow the ghribas to cool before removing them from the baking sheet.' ,
    image: food_6
  },
  'Briouate': {
    name: 'Briouate',
    description: 'Almond and honey Briouates! Also known as almond and honey bricks, these sweets are typical of Morocco' ,
    ingredients: ['6 sheets of phyllo dough', '150g almond powder', '60g sugar', '2 tablespoons orange blossom water', '3 tablespoons water', '1 teaspoon ground cinnamon', '100g honey + 1 tablespoon orange blossom water', 'A little beaten egg for glazing', 'A few sesame seeds for decoration (optional)'],
    instructions: 'Mix the almond powder with the sugar and cinnamon. Chefs tip: for an even more flavorful filling, toast the almond powder by placing it in the oven at 150°C for 5 minutes. Transfer the mixture to a mixing bowl and add the orange blossom water and tablespoons of water, mixing until you achieve a wet sand-like texture. Adjust the amount of water if the filling seems too dry. Cut your phyllo dough sheets in half. Fold one half in half again (as shown in the photos), place some filling, and fold into a triangle shape. Finish by brushing the end of the phyllo dough with beaten egg, then seal your briouate. Continue this process until all ingredients are used. Fry your briouates in hot oil for approximately 3 minutes on each side. Immediately place them on paper towels to absorb excess oil. Once all briouates are fried, gently heat honey over low heat mixed with a little orange blossom water. Dip your briouates into the honey mixture, then place them on a cooling rack. Sprinkle with sesame seeds.' ,
    image: food_7
  },
  'Fekkas': {
    name: 'Fekkas',
    description: ' Cunchy little cookies that carry the scent of the Maghreb' ,
    ingredients: ['1 glass of eggs (4 eggs)', '1 glass of sugar (200 g)', '1 glass of oil (200 ml) + 1 tablespoon of butter (25 g)', '1/3 glass of orange blossom water (about 80 ml)', 'a pinch of salt (3 g)', '1/2 glass of toasted sesame seeds (100 g)', '1 teaspoon of ground anise seeds', '1 teaspoon of ground fenugreek seeds (6 g)', '1 glass of lightly toasted whole almonds (125 g, you can use up to 180 g)', '12 g baking powder', '6 and 2/3 glasses of flour to achieve a dough that is soft and does not stick to hands'],
    instructions: 'Combine eggs, sugar, oil, butter, salt, ground anise, ground fenugreek, and sesame seeds until homogeneous. Mix in orange blossom water, almonds, baking powder, and gradually add flour without kneading, just gathering with fingers. Shape into two logs, tap to remove air bubbles, and place on a lined baking sheet. Brush with milk and cocoa mixture. Bake at 180°C for about 20 minutes until partially baked, not golden. Rest covered for several hours or overnight. Slice thinly, bake on both sides until golden.' ,
    image: food_8
  },
  'Jawhara': {
    name: 'Jawhara',
    description: 'A dessert made with phyllo dough sheets, orange blossom cream, and toasted almond flakes.' ,
    ingredients: ['2 sheets of phyllo dough', '10 g melted butter', 'For the almonds: 100 g blanched almonds, 4 tbsp powdered sugar, 3 tbsp sunflower oil ', 'For the cream:  150 ml milk, 2 tsp cornstarch, 1 tbsp orange blossom water', '3 tbsp powdered sugar'],
    instructions: 'Mix cornstarch with a bit of milk in a bowl. Heat the remaining milk and orange blossom water in a saucepan. Gradually add the cornstarch mixture while stirring until it thickens briefly. Remove from heat, cool, and refrigerate. Heat oil in a pan, toast almonds until golden, drain on paper towels, and let cool. Blend with sugar and set aside. Fold phyllo dough sheets into quarters, cut out rounds, place on a parchment-lined baking sheet, brush with melted butter, and bake at 180°C until golden. Layer phyllo rounds with cream and almond mixture, repeating for additional layers' ,
    image: food_9
  },
  'Oranges with Cinnamon': {
    name: 'Oranges with Cinnamon',
    description: 'fruta' ,
    ingredients: ['6 oranges', '4 tablespoons orange blossom water', '2 tablespoons sugar', '1 teaspoon ground cinnamon', '2 sprigs of fresh min'],
    instructions: 'Peel the oranges, carefully removing the white pith. Slice them thinly and remove any seeds. Mix the orange blossom water with sugar. Arrange the orange slices in a rosette pattern on 4 dessert plates. Drizzle with orange blossom water and sprinkle each plate with a few mint leaves.' ,
    image: food_10
  },
  'El Halwa El Filaliya': {
    name: 'El Halwa El Filaliya',
    description: 'An ancient recipe. Today, I m offering you a very simple version made with Chebakia. A true delight!' ,
    ingredients: ['1 kg de chebakia', '5 tablespoons of warm flower honey', '2 pinches of ground mastic', '4 tablespoons of orange blossom water', '2 saffron pistils', '200 g of toasted chopped almonds', '1 teaspoon of cinnamon', 'Decoration: Slivered almonds'],
    instructions: 'In a bowl, place the saffron pistils and let them infuse for 30 minutes. Grind the chebakia in a food processor. Place the ground chebakia in a sieve for 4 hours to drain the oil. Mix the ground chebakia with cinnamon, mastic, orange blossom water, and warm honey. Knead by hand until obtaining a homogeneous dough, then add the chopped almonds. Arrange the filaliya in a dish and decorate with slivered almonds.' ,
    image: food_11
  },
  'Amlou Ice Cream': {
    name: 'Amlou Ice Cream',
    description: 'Amlou is a Berber-Moroccan spread made from roasted almonds, honey, and argan oil.' ,
    ingredients: ['300 g sweetened condensed milk', '500 ml heavy cream', '100 g Amlou paste', '1 lemon'],
    instructions: 'For successful preparation of the Amlou ice cream, ensure all ingredients are thoroughly chilled. Begin by chilling the whisk attachments, bowl, cream, and milk in the fridge for a few hours. Once cold, pour the cream into the chilled bowl and add lemon juice along the side. Whip the heavy cream until it forms soft peaks, then gradually add the sweetened condensed milk while continuing to beat until the mixture thickens. Take a portion of the whipped cream and combine it with the Amlou paste in a separate bowl, beating well to incorporate. Gently fold this Amlou cream mixture into the whipped cream. Transfer the mixture into a container and freeze for several hours or overnight until set. Serve chilled and optionally top with your preferred toppings before serving.' ,
    image: food_12
  },
  'Chbakia': {
    name: 'Chbakia',
    description: 'It is usually served during Ramadan and for special occasions.' ,
    ingredients: ['1 cup sesame seeds, toasted', 'Pinch of mastic gum grains, optional', '1/4 teaspoon granulated sugar', '4 cups (510 grams) all-purpose flour, more as needed', '1/2 teaspoon baking powder', '1/2 teaspoon salt', '1 1/2 teaspoons ground anise', '1 1/2 teaspoons ground cinnamon', '1/2 teaspoon saffron threads, crumbled', '1/2 teaspoon ground turmeric', '1 extra-large egg', '1/4 cup (2 ounces) unsalted butter, melted', '1/4 cup olive oil', '1/4 cup vinegar', '1/4 cup orange flower water', '1 teaspoon active dry yeast, dissolved in 1/4 cup warm water'],
    instructions: 'To prepare Chebakia, begin by grinding toasted sesame seeds until powdery in a food processor, then mix with crushed mastic-sugar mixture, flour, baking powder, salt, ground anise, cinnamon, saffron, turmeric, egg, butter, oil, vinegar, and orange flower water until a stiff, pliable dough forms. Knead by hand or with a stand mixer, then divide into portions, letting rest before rolling thinly and cutting into rectangles. Make cuts in each rectangle and shape into flowers. Fry in hot oil until golden brown, then soak in hot honey infused with orange flower water. Drain and sprinkle with sesame seeds before serving, traditionally enjoyed during Ramadan or with tea or coffee.' ,
    image: food_13
  },
  'Almond sellou': {
    name: 'Almond sellou',
    description: 'Le Sellou, a Moroccan specialty, is highly appreciated during the month of Ramadan, where it generously and deliciously satisfies hunger before a day of fasting or during the evening meal that breaks the fast.' ,
    ingredients: ['Flour: 500 g', 'Blanched almonds: 500 g', 'Sesame seeds: 500 g', 'Melted butter: 500 g', 'Liquid honey: 250 g', 'Anise seeds: 1 tbsp', 'Ground cinnamon: 1 tbsp', 'Grated nutmeg: 0.5 tsp', 'Gum arabic powder: 2 tsp', 'Toasted almonds: 1 glass (approx. 250 ml)', 'Icing sugar: 2 tbsp'],
    instructions: 'To prepare Moroccan Sellou, start by roasting flour either in the oven or a hot non-stick frying pan until it achieves a golden-brown color, ensuring it doesn t burn. Sift the roasted flour and set it aside. Similarly, toast sesame seeds and blanched almonds separately until they are fragrant and lightly browned. In a food processor, blend these roasted ingredients with nutmeg, anise seeds, cinnamon, and gum arabic. Transfer this mixture into a large bowl and add dried fruits, thoroughly mixing everything together. Gradually incorporate clarified melted butter and honey by hand until well combined, adjusting the butter amount for desired texture—less for a powdery consistency ideal for shaping into a pyramid, or more for a denser Sellou. Shape the Sellou into a pyramid on a plate and generously dust with powdered sugar through a sieve. Decorate by drawing lines on each side with whole almonds, starting from the base up to the top',
    image: food_14
  },
  'Makrouts': {
    name: 'Makrouts',
    description: 'Moroccan pastries like Sellou and pistachio baklavas are indeed perfect companions for enjoying with mint tea. They re a delightful treat, especially during Ramadan or any time for a sweet indulgence.' ,
    ingredients: ['For the Dough: 215 g semolina (medium), 2.5 cl orange blossom water, 7.5 cl semi-skimmed milk , 40 g butter, Pinch of salt,', 'For the Date Filling:  150 g date paste, 1 tsp cinnamon , 1 tsp orange blossom water, ',  'For the Syrup:  200 g honey, 1 tbsp orange blossom water'],
    instructions: 'To prepare Moroccan makrouts, start by mixing 215 g of medium semolina with a pinch of salt in a bowl. Add 40 g of melted butter, 7.5 cl of semi-skimmed milk, and 2.5 cl of orange blossom water, blending until you achieve a smooth dough. Let it rest for 30 minutes after lightly kneading and shaping it into a ball. Meanwhile, combine 150 g of date paste with 1 tsp each of cinnamon and orange blossom water in another bowl for the filling. Divide the date mixture into two logs and shape them. Then, divide the semolina dough into two portions, wrap each date log inside, and shape them into smooth logs. Cut into small rectangular pieces and decorate with star-shaped designs. Fry the makrouts until golden brown, then dip them in a warm syrup made from heating 200 g of honey with 1 tbsp of orange blossom water. Allow them to cool on a wire rack to drain excess syrup. Serve these delightful treats with tea for a traditional Moroccan delight!' ,
    image: food_15
  },
  'Rghaif with Honey': {
    name: 'Rghaif with Honey',
    description: 'These are the ultimate festive crepes for Eid celebrations.' ,
    ingredients: ['For the dough: 250 g of flour, Water (as needed for the dough), 1/2 tsp baking powder, 2 tbsp orange blossom water,  few saffron threads,  ,Salt ', 'For the filling: 125 g blanched almonds, toasted and ground ,1/2 tsp cinnamon, 1 tsp orange blossom water, 2 tbsp sugar'],
    instructions: 'Combine 250 g of flour, powdered milk, yeast, baking powder, vinegar, and orange blossom water in a bowl. Gradually add water while kneading the dough until it comes together, kneading thoroughly for about ten minutes until the dough is smooth and elastic. Divide the dough into small balls, coat them with oil, and place them on an oiled surface. Cover and let them rest for 10 minutes to make the dough softer and easier to roll out. Mix ground almonds with cinnamon, sugar, and orange blossom water for the filling. Roll out each dough ball into a thin sheet, stretching it out. Place a spoonful of the almond mixture in the middle of each sheet and fold it to form a small square envelope (see technique in video). Repeat until all dough balls are used. Flatten the filled squares slightly and fry them evenly on both sides until golden brown, flipping as needed. Dip the rghaif in warm honey before serving, or simply serve them with powdered sugar or honey according to taste.' ,
    image: food_16
  },
  'Orange Cake': {
    name: 'Orange Cake',
    description: 'cake' ,
    ingredients: ['1 cup (225g) unsalted butter, softened ', '1 cup (200g) granulated sugar', '4 large eggs', '1 teaspoon vanilla extract', 'Zest of 2 oranges', '1/2 cup (120ml) fresh orange juice', '2 cups (250g) all-purpose flour', '2 teaspoons baking powder', '1/2 teaspoon salt'],
    instructions: 'To make Orange Cake, start by preheating your oven to 350°F (175°C) and preparing a 9-inch round cake pan by greasing and flouring it. In a large bowl, cream together 1 cup (225g) softened unsalted butter with 1 cup (200g) granulated sugar until light and fluffy. Beat in 4 large eggs one at a time, then add 1 teaspoon vanilla extract and the zest of 2 oranges. In a separate bowl, whisk together 2 cups (250g) all-purpose flour, 2 teaspoons baking powder, and 1/2 teaspoon salt. Gradually add the dry ingredients to the butter mixture, alternating with 1/2 cup (120ml) fresh orange juice, beginning and ending with the flour mixture. Mix until just combined. Pour the batter into the prepared pan and smooth the top. Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean. Let the cake cool in the pan for 10 minutes, then transfer it to a wire rack to cool completely. Dust with powdered sugar before serving, if desired. Enjoy your moist and flavorful Orange Cake!' ,
    image: food_17
  },
  'Almond Cake': {
    name: 'Almond Cake',
    description: 'cake' ,
    ingredients: ['1 cup (225g) unsalted butter, softened', '1 cup (200g) granulated sugar', '4 large eggs', '1 teaspoon almond extract', '1 cup (100g) almond flour', '1 cup (125g) all-purpose flour', '1 teaspoon baking powder', '1/4 teaspoon salt', '1/4 cup (60ml) milk'],
    instructions: 'Preheat your oven to 350°F (175°C). Grease and flour a 9-inch round cake pan or line it with parchment paper. In a large bowl, cream together 1 cup of softened unsalted butter and 1 cup of granulated sugar until light and fluffy. Add 4 large eggs one at a time, beating well after each addition, and mix in 1 teaspoon of almond extract. In a separate bowl, whisk together 1 cup of almond flour, 1 cup of all-purpose flour, 1 teaspoon of baking powder, and 1/4 teaspoon of salt. Gradually add the dry ingredients to the butter mixture, alternating with 1/4 cup of milk, beginning and ending with the flour mixture. Mix until just combined. Pour the batter into the prepared pan and smooth the top. Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean. Cool in the pan for 10 minutes, then transfer to a wire rack to cool completely. Optionally, dust with powdered sugar or top with sliced almonds before serving. Enjoy your Almond Cake!' ,
    image: food_18
  },
  'Cake with Orange Blossom': {
    name: 'Cake with Orange Blossom',
    description: 'cake' ,
    ingredients: ['1 cup (225g) unsalted butter, softened ', '1 cup (200g) granulated sugar', '1 teaspoon vanilla extract', '1 tablespoon orange blossom water', '1 teaspoon vanilla extract', '1/2 cup (120ml) fresh orange juice', '2 cups (250g) all-purpose flour', '2 teaspoons baking powder', '1/2 teaspoon salt'],
    instructions: 'Start by creaming together butter and sugar until fluffy. Beat in eggs one at a time. Alternate adding dry ingredients and a mixture of orange juice, zest, milk, and orange blossom water. Pour into a greased pan and bake until a toothpick comes out clean. Let it cool, then drizzle with a glaze made of powdered sugar, orange juice, and orange blossom water. Enjoy the citrusy and floral flavors of this delightful cake!' ,
    image: food_19
  },
  'Marble Chocolate Cake': {
    name: 'Marble Chocolate Cake',
    description: 'cake' ,
    ingredients: ['1 3/4 cups (220g) all-purpose flour', '1 1/2 teaspoons baking powder', '1/2 teaspoon baking soda', '1/2 teaspoon salt', '1/2 cup (115g) unsalted butter, softened', '1 cup (200g) granulated sugar', '2 large eggs, at room temperature', '1 teaspoon vanilla extract', '1/2 cup (120ml) milk', '1/2 cup (120ml) sour cream', '1/4 cup (25g) cocoa powder ', ' cup (60ml) boiling water'],
    instructions: 'To make a Marble Chocolate Cake, preheat your oven to 350°F (175°C) and grease a cake pan. Cream softened butter and sugar until light, then beat in eggs one at a time followed by vanilla extract. Alternate adding a mixture of flour, baking powder, baking soda, and salt with a blend of milk and sour cream until just combined. In a separate bowl, mix cocoa powder with boiling water to form a smooth chocolate batter. Pour half of the vanilla batter into the pan, dollop spoonfuls of chocolate batter over it, and swirl gently with a knife. Bake for 30-35 minutes until a toothpick comes out clean. Cool for 10 minutes in the pan before transferring to a wire rack to cool completely.' ,
    image: food_20
  },
};

const MealPage = () => {
  const { categoryName, mealName } = useParams();
  return (
    <div className="meal-page">
      <Recipe recipe={recipes[mealName]} />
    </div>
  );
};


export default MealPage;
