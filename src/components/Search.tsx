const Search: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <input
          type="search"
          className="border border-gray-300 w-[300px] focus:outline-none rounded-full px-3 py-1 bg-green-100 text-gray-800"
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default Search;
