import React from 'react';

const Search= ({searchTerm , setSearchTerm}) => {
    return (
        <div className="search flex items-center justify-center sm:justify-end w-full max-w-[600px] mx-auto px-4 py-2">
          <button className="h-12 w-12 bg-[#0F0D23] rounded-l-xl flex justify-center items-center">
            <img src="https://res.cloudinary.com/dhge5bwvy/image/upload/v1747663082/search_hugiab.png" alt="search" className="w-5 h-5" />
          </button>
        <input
            type="text"
            className="flex-1 h-12 text-[#A8B5DB] text-base sm:text-lg md:text-xl bg-[#0F0D23] rounded-r-xl outline-none pl-3"
            placeholder="Search through more than 300 movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
</div>

    )
}

export default Search;