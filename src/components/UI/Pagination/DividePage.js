import { useState } from "react";
const Divide = ({ products }) => {
  // Quản lý phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageProducts = (products || []).slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return { currentPageProducts, setCurrentPage, itemsPerPage };
};
export default Divide;
