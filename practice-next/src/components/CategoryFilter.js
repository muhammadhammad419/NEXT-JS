export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const allCategories = ['All', ...categories];
  
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {allCategories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-white/70 backdrop-blur-sm text-gray-700 border border-white/30 hover:bg-white/90 hover:shadow-md'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}