import style from "./collection.module.scss";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import HoverImage from "../Home/components/HoverImage";
import PaginationControl from "../../components/UI/Pagination/PaginationControl";
import Header from "./Header";
import ProductList from "./ProductList";
function Collection() {
  const location = useLocation();
  // Lấy dữ liệu từ localStorage hoặc state (truyền từ trang trước)
  const storedProducts = localStorage.getItem("products");
  const storedCategoryName = localStorage.getItem("categoryName");
  //create state to save products and categoryName
  const [products, setProducts] = useState(
    storedProducts ? JSON.parse(storedProducts) : location.state?.products
  );
  const [categoryName, setCategoryName] = useState(
    storedCategoryName || location.state?.categoryName || ""
  );
  // Lưu vào localStorage khi sản phẩm và tên danh mục thay đổi
  useEffect(() => {
    if (products.length > 0 && categoryName) {
      localStorage.setItem("products", JSON.stringify(products));
      localStorage.setItem("categoryName", categoryName);
    }
  }, [products, categoryName]);
  const cx = classNames.bind(style);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageProducts = (products || []).slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalItems = products.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Reset lại trang phân trang khi chuyển sang trang khác
  useEffect(() => {
    setCurrentPage(1); // Reset lại trang về 1 khi dữ liệu sản phẩm thay đổi
  }, [products]);
  // Điều hướng về trang trước hoặc sản phẩm được chọn
  useEffect(() => {
    if (location.state?.products && location.state?.categoryName) {
      setProducts(location.state.products);
      setCategoryName(location.state.categoryName);
    }
  }, [location]);
  return (
    <div className={cx("container")}>
      <Header categoryName={categoryName} totalItems={totalItems} />
      <div className={cx("content")}>
        {products.length === 0 ? (
          <div className={cx("no-products")}>No products available.</div>
        ) : (
          <div className={cx("container_products")}>
            <div className={cx("filter")}>
              <p>Filter options will go here.</p>
            </div>
            <div className="product-list_item">
              <ul className={cx("listItem")}>
                <ProductList
                  currentPageProducts={currentPageProducts}
                  HoverImage={HoverImage}
                />
              </ul>
              {/* Phân trang */}
              <div className={cx("pagination")}>
                <PaginationControl
                  totalItems={totalItems}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Collection;
