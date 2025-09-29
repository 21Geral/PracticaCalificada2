import Galery from "./Galery";

export default function Main({ images, selectedCategory, loading, error }) {
  return (
    <main className="w-full flex flex-col justify-center items-center min-h-40 lg:min-h-70 lg:w-240">
      <h2 className="text-[32px] mx-auto font-bold pt-9 pb-4 capitalize">{selectedCategory ? `${selectedCategory} Pictures` : "Random Pictures"}</h2>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error fetching images.</p>}
      {!loading && !error && <Galery images={images} />}
    </main>
  );
}
