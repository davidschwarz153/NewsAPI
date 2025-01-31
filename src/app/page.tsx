"use client";

import { useState, useEffect } from "react";
import NewsPage from "./newscards";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("en");
  const [sortBy, setSortBy] = useState("relevancy");

  
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleSearchClick = () => {
    setIsInitialLoad(prev => !prev); 
  };

  return (
    <body className="text-[1.2vw]">
      <header className="flex justify-center font-bold text-[3vw] h-[10vh] mt-10">
        NewsAPP
      </header>
      <main className="flex flex-col justify-center items-center">
        <section>
          <article className="flex flex-col justify-center items-center m-[2vw] gap-3">
            <input
              className="w-[25vw] h-10 rounded-xl backdrop-blur-sm bg-slate-600 px-4"
              type="text"
              name="search-input"
              id="search-input"
              placeholder="Search ..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <select
              className="w-[25vw] h-10 rounded-xl backdrop-blur-sm bg-slate-600 px-4"
              name="lang"
              id="lang-select"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="de">Deutsch</option>
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
            <select
              className="w-[25vw] h-10 rounded-xl backdrop-blur-sm bg-slate-600 px-4"
              name="sort"
              id="sort-select"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="relevancy">Relevancy</option>
              <option value="publishedAt">Newest</option>
              <option value="popularity">Popularity</option>
            </select>
            <button
              className="w-[15vw] h-10 rounded-xl backdrop-blur-sm bg-orange-600 px-4"
              type="button"
              onClick={handleSearchClick} 
            >
              Search
            </button>
          </article>
        </section>
        <section id="cards">
          <NewsPage
            searchQuery={searchQuery}
            language={language}
            sortBy={sortBy}
            isInitialLoad={isInitialLoad} 
            
          />
        </section>
      </main>
      <footer></footer>
    </body>
  );
}
