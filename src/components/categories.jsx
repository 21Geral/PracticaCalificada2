function Categories({ categories, setCategories, setSearchText }) {
  const handleClick = (id) => {
    // desactiva todas y activa solo la seleccionada
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, status: true } : { ...cat, status: false }
      )
    );
    // limpia cualquier búsqueda anterior
    setSearchText("");
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleClick(cat.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 
            ${
              cat.status
                ? "bg-[#051c33] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
