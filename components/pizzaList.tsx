import { ItemCard } from "../components/ItemCard"

export const PizzaList = ({pizzaList}:any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      {pizzaList.map((item: { 
        _id: string; 
        title?: string; 
        prices?: number[]; 
        desc?: string; 
        img: string
      }) => {
        return (
          <ItemCard key={item._id} item={item}/>
        )
      })}
    </div>
  )
};
