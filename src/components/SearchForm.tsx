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
    <form className="form center-flex" onSubmit={onSubmit}>
      <label className="center-flex">
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
    </form>
  );
};
