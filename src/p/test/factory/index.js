import NewYorkPizzaFactory from "./pizzaFactorys/newyorkPizzaFactory";
import CustomePizzaFactory from "./pizzaFactorys/customePizzaFactory";


export default class Index{
   constructor(){
       let Nfactory=new NewYorkPizzaFactory();
       let pizza=Nfactory.createOrder("big");
       console.log(pizza);
       let Cfactory=new CustomePizzaFactory();
       let pizza1=Cfactory.createOrder("small");
       console.log(pizza1)
   }
}
new Index();