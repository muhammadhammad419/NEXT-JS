export default function SearchBar({ onSearch }) {
  return (
    <div className="relative group">
      <input
        type="text"
        placeholder="Search for products, brands, categories..."
        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white/90 transition-all duration-300 text-gray-800 placeholder-gray-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
        <svg className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}