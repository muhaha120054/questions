const menu = {
  _courses: {
  appetizers:[],
  mains:[],
  desserts:[],
  },

  get appetizers(){
    return appetizers
  },
  set appetizers(appetizerIn){
    return appetizerIn;
  },
  
  get mains(){
    return mains
  },
  set mains(mainsIn){
    return mainsIn;
  },
  
  get desserts(){
    return desserts
  },
  set desserts(dessertsIn){
    return dessertsIn;
  },
  get courses(){
    return {
      appetizers: this._courses.appetiers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    }
  },
  
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourses(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return 
  },
	generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourses('appetizers');
    const main = this.getRandomDishFromCourses('mains');
    const dessert = this.getRandomDishFromCourses('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers','Casar Salad', 4.25);
menu.addDishToCourse('appetizers','Fried Fries', 3.25);
menu.addDishToCourse('appetizers','Fried Chiken Stick', 5.25);
menu.addDishToCourse('mains','steak 7 once', 9.25);
menu.addDishToCourse('mains','steak 12 once', 12.25);
menu.addDishToCourse('mains','steak  16 once', 20.25);
menu.addDishToCourse('desserts','Ice cream', 1.25);
menu.addDishToCourse('desserts','Cheese Cake', 1.25);
menu.addDishToCourse('desserts','Banana Cake', 1.25);

let meal = menu.generateRandomMeal();
console.log(meal);
