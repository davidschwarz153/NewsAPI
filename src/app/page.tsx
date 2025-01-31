import Image from "next/image";



export default function Home() {
  return (
        <body className="text-[1.2vw]">
          <header className="flex justify-center font-bold text-[3vw] h-[10vh] mt-10 ">
            NewsAPP
          </header>
          <main className="flex flex-col justify-center items-center ">
              <section className=" w-[35vw] h-[40vh] bg-slate-800 rounded-2xl ">
                <article className="flex flex-col justify-center items-center m-[3vw] gap-3">
                  <input className="w-[25vw] h-10 rounded-xl backdrop-blur-sm bg-slate-600 px-4" type="text" name="search-input" id="search-input" placeholder="Search ..." />
                  <select className="w-[25vw] h-10 rounded-xl backdrop-blur-sm bg-slate-600 px-4" name="lang" id="lang-select">
                    <option value="deutsch">Deutsch</option>
                    <option value="spanisch">Spanisch</option>
                    <option value="englisch">Englisch</option>
                  </select>
                  <select className="w-[25vw] h-10 rounded-xl backdrop-blur-sm bg-slate-600 px-4" name="sort" id="sort-select">
                    <option value="relevanz">Relevanz</option>
                    <option value="neuste">Neuste</option>
                    <option value="älteste">Älteste</option>
                  </select>
                  <button className="w-[15vw] h-10 rounded-xl backdrop-blur-sm bg-orange-600 px-4" type="button">Search</button>
                </article>
              </section>
          </main>
          <footer>

          </footer>
        </body>
  );
}
