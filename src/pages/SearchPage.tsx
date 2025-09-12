import { useEffect, useState, type ReactElement } from "react";
import { SearchForm } from "../components/SearchForm";
import { searchCocktailsByName } from "../api/cocktailApi";
import { Link, useSearchParams } from "react-router-dom";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { Pagination } from "../components/Pagination";

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
  const currentItems = results.slice(start, end);

  const handleOnPrevious = () =>
    setPage((previous) => Math.max(1, previous - 1));
  const handleOnNext = () =>
    setPage((previous) => Math.min(pageTotal, previous + 1));

  const renderSearchInfo = () => {
    const s = (searchParams.get("s") || "").trim();
    if (isLoading) return <p className="center-text">Loading...</p>;

    if (!s)
      return (
        <p className="center-text text-size">
          Start to search your cocktail...
        </p>
      );

    if (results.length === 0)
      return <p className="center-text">No cocktails found for “{s}”.</p>;

    return null;
  };

  const renderCurrentItems = () => {
    return (
      <div className="search-list">
        {currentItems ? (
          currentItems.map((item) => (
            <Link
              to={`/cocktailinfo/${item.id}`}
              key={item.id}
              className="link"
            >
              {item.name}
            </Link>
          ))
        ) : (
          <p className="center-text"> Loading...</p>
        )}
      </div>
    );
  };

  const renderPagination = () => {
    return (
      results &&
      results.length > 10 && (
        <Pagination
          prev={handleOnPrevious}
          next={handleOnNext}
          currentPage={page}
          pageTotal={pageTotal}
        />
      )
    );
  };

  return (
    <section id="seatch-page" className="container">
      <h2 className="center-text">Search Cocktails</h2>
      <SearchForm
        query={query}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />

      <div className="search-wrapper center-block">
        {renderSearchInfo()}
        {renderCurrentItems()}
        {renderPagination()}
      </div>
    </section>
  );
};
