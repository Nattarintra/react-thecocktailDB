import type { ReactElement } from "react";

interface IPaginationProps {
  prev: () => void;
  next: () => void;
  currentPage: number;
  pageTotal: number;
}

export const Pagination = ({
  prev,
  next,
  currentPage,
  pageTotal,
}: IPaginationProps): ReactElement => {
  return (
    <div className="pagination center-flex">
      <button
        disabled={currentPage <= 1}
        className="btn--pagination"
        onClick={prev}
        aria-label="Previous page"
      >
        <span className="material-symbols-outlined">arrow_circle_left</span>
      </button>

      <p>
        {currentPage} / {pageTotal}
      </p>

      <button
        disabled={currentPage >= pageTotal}
        className="btn--pagination"
        onClick={next}
        aria-label="Next page"
      >
        <span className="material-symbols-outlined">arrow_circle_right</span>
      </button>
    </div>
  );
};
