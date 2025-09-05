import type { ReactElement } from "react";

interface ISearchProps {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const SearchForm = ({
  query,
  onSubmit,
  onChange,
}: ISearchProps): ReactElement => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="center-flex">
        <label className="center-flex">
          <span className="material-symbols-outlined">search</span>
          <input
            className="input"
            name="search"
            placeholder="Margarita"
            value={query}
            onChange={onChange}
          />
        </label>
        <button className="btn btn--search" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};
