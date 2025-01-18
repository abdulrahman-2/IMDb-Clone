"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent invalid page numbers
    router.push(`/?page=${newPage}`); // Update the URL with the new page
  };

  // Generate the pagination range
  const getPaginationRange = () => {
    const range = [];

    // Always show the first page
    range.push(1);

    // Add ellipsis if currentPage is far from the start
    if (currentPage > 3) {
      range.push("...");
    }

    // Add pages around the current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      range.push(i);
    }

    // Add ellipsis if currentPage is far from the end
    if (currentPage < totalPages - 2) {
      range.push("...");
    }

    // Always show the last page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="flex items-center justify-center gap-4 my-7">
      {/* Previous Page Button */}
      <FaArrowLeft
        onClick={() => handlePageChange(currentPage - 1)}
        className={`size-8 bg-amber-500 p-2 rounded-md cursor-pointer ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-disabled={currentPage === 1}
      />

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getPaginationRange().map((item, index) =>
          item === "..." ? (
            <span key={index} className="font-bold">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => handlePageChange(item as number)}
              className={`font-bold text-sm size-8 rounded-md grid place-content-center ${
                currentPage === item
                  ? "bg-amber-500 text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Next Page Button */}
      <FaArrowRight
        onClick={() => handlePageChange(currentPage + 1)}
        className={`size-8 bg-amber-500 p-2 rounded-md cursor-pointer ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
