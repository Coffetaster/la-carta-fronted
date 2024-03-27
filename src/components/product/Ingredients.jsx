const Ingredients = () => {
    const categorieContent = [
      { id: 1, name: "Chocolate", unidad: "12", medida: "mililitros" },
      { id: 2, name: "Galletitas",  unidad: "2", medida: "unidades" },
      { id: 3, name: "Helado", unidad: "2", medida: "unidades" },
      { id: 4, name: "Caramelo", unidad: "3", medida: "unidades" },
    ];
    return (
      <ul className="list_details">
        {categorieContent.map((item) => (
          <li key={item.id}>
            
              <i className="fa fa-caret-right mr10 text-thm"></i>
              {item.name} {" "}
              <span className="float-end text-thm">({item.unidad}{item.medida})</span>
            
          </li>
        ))}
      </ul>
    );
  };
  
  export default Ingredients;
  