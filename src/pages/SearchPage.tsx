import { useEffect, useState, type ReactElement } from "react";
import { SearchForm } from "../components/SearchForm";
import { searchCocktailsByName } from "../api/cocktailApi";
import { Link, useSearchParams } from "react-router-dom";
import type { ICocktail } from "../utils/mapRawCocktailData";

const PAGE_SIZE = 10;
export const SearchPage = (): ReactElement => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState<ICocktail[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query ? { s: query } : {});
    setQuery("");
    setPage(1);
  };

  useEffect(() => {
    const q = searchParams.get("s") ?? "";
    if (!q.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    searchCocktailsByName(q)
      .then(setResults)
      .finally(() => setLoading(false));
  }, [searchParams]);

  const totalSearchTerms = results.length;
  const pageTotal = Math.max(1, Math.ceil(totalSearchTerms / PAGE_SIZE));

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const items = results.slice(start, end);

  const handleOnPrevious = () =>
    setPage((previous) => Math.max(1, previous - 1));
  const handleOnNext = () =>
    setPage((previous) => Math.min(pageTotal, previous + 1));
  return (
    <section id="seatch-page" className="container">
      <p>Search Cocktails</p>
      <SearchForm
        query={query}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      {!isLoading && results.length === 0 && searchParams.get("s")?.trim() && (
        <p>No cocktails found for “{searchParams.get("s")}”.</p>
      )}
      <div className="search-wrapper center-block">
        <ul>
          {items ? (
            items.map((res) => (
              <Link to={`/cocktailinfo/${res.id}`} key={res.id} className=" ">
                <li>
                  <h4 className="">{res.name}</h4>
                </li>
              </Link>
            ))
          ) : (
            <p> Loading...</p>
          )}
        </ul>
        <div className="pagination">
          <span
            className="material-symbols-outlined"
            onClick={handleOnPrevious}
          >
            arrow_back_ios
          </span>
          <p>
            {page} / {pageTotal}
          </p>
          <span className="material-symbols-outlined" onClick={handleOnNext}>
            arrow_forward_ios
          </span>
        </div>
      </div>
    </section>
  );
};
