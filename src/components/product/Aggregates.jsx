const Aggregates = () => {
  const categorieContent = [
    { id: 1, name: "Chocolate", price: "60.00", unidad: "12", medida: "mililitros" },
    { id: 2, name: "Galletitas", price: "80.00", unidad: "2", medida: "unidades" },
    { id: 3, name: "Helado", price: "40.00", unidad: "2", medida: "unidades" },
    { id: 4, name: "Caramelo", price: "30.00", unidad: "3", medida: "unidades" },
  ];
  return (
    <ul className="list_details">
      {categorieContent.map((item) => (
        <li key={item.id}>
           
            <i className="fa fa-caret-right mr10 text-thm"></i>
           
            {item.name}
            
            <span className="float-end text-thm">{item.price} cup</span>
            <p>({item.unidad}{item.medida}){" "}</p>
          
        </li>
      ))}
    </ul>
  );
};

export default Aggregates;
