import Search from "./Search.jsx";
import Categories from "./categories.jsx";

export default function Header({ categories, setCategories, setSearchText }) {
  return (
    <header className="flex flex-col items-center justify-center w-full md:mt-4">
      <h1 className="text-6xl font-bold text-center py-8 ">SnapShot</h1>
      <Search setSearchText={setSearchText} setCategories={setCategories} />
      <Categories categories={categories} setCategories={setCategories} setSearchText={setSearchText} />
    </header>
  );
}
