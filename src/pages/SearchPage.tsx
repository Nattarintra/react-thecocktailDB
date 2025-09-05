import { useEffect, useState, type ReactElement } from "react";
import { SearchForm } from "../components/SearchForm";
import { searchCocktailsByName } from "../api/cocktailApi";
import { Link, useSearchParams } from "react-router-dom";
import type { ICocktail } from "../utils/mapRawCocktailData";
import { Thumbnail } from "../components/Thumbnail";

export const SearchPage = (): ReactElement => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState<ICocktail[]>([]);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query ? { s: query } : {});
    setQuery("");
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
      <div className="center-flex">
        {results ? (
          results.map((res) => (
            <Link to={`/cocktailinfo/${res.id}`} key={res.id} className="card ">
              <Thumbnail url={res.thumbnail} alt={res.name} />
              <h4 className="center-text">{res.name}</h4>
            </Link>
          ))
        ) : (
          <p> Loading...</p>
        )}
      </div>
    </section>
  );
};
