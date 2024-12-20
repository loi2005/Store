import style from "./collection.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import HoverImage from "../Home/components/HoverImage";
import { Link } from "react-router-dom";
import HandleToggle from "../../components/UI/Toggle/handleToogle";
import IdxObject from "../../components/UI/smallItem/idxObject";
import PaginationControl from "../../components/UI/Pagination/PaginationControl";

function Collection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectProduct, isToggle, handleToggle, setLayout, layout } =
    HandleToggle();

  // Lấy dữ liệu từ localStorage hoặc state (truyền từ trang trước)
  const storedProducts = localStorage.getItem("products");
  const storedCategoryName = localStorage.getItem("categoryName");

  const [products, setProducts] = useState(
    storedProducts ? JSON.parse(storedProducts) : location.state?.products || []
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

  // Khởi tạo className với classNames
  const cx = classNames.bind(style);

  // Quản lý phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageProducts = products.slice(
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
      {/* Phân trang */}
      <PaginationControl
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      {/* Hiển thị sản phẩm đã chọn nếu toggle */}
      {isToggle && <IdxObject product={selectProduct} />}

      <div className={cx("heading")}>
        <p className={cx("caption")}>{categoryName}</p>
      </div>

      <div className={cx("content")}>
        <div className={cx("content-heading")}>
          <div className={cx("amount")}>{totalItems} Products</div>
          <div className={cx("option")}>
            <label>default</label>
          </div>
          <div className={cx("chosen")}>
            <i
              onClick={() => setLayout("list")}
              className={cx("bx bx-list-ul", "icon_option", {
                active: layout === "list",
              })}
            ></i>
            <i
              onClick={() => setLayout("grid")}
              className={cx("bx bxs-dashboard", "icon_option", {
                active: layout === "grid",
              })}
            ></i>
          </div>
        </div>

        {products.length === 0 ? (
          <div className={cx("no-products")}>No products available.</div>
        ) : (
          <div className={cx("container_products")}>
            <div className={cx("filter")}>
              <p>Filter options will go here.</p>
            </div>
            <ul className={cx("listItem")}>
              <div
                className={cx("display-product", {
                  grid_layout: layout === "grid",
                  list_layout: layout === "list",
                })}
              >
                {currentPageProducts.map((product, index) => (
                  <li key={index} className={cx("item")}>
                    <div className={cx("image")}>
                      <Link to="#" className={cx("link")}>
                        <HoverImage
                          defaultImage={product.image}
                          hoverImage={product.hoverImages || product.image}
                        />
                      </Link>
                      <div className={cx("icons")}>
                        <i
                          onClick={() => handleToggle(product)}
                          className={cx("bx bx-show-alt", "icon")}
                        ></i>
                        <i className={cx("bx bx-shopping-bag", "icon")}></i>
                      </div>
                    </div>
                    <div className={cx("detail")}>
                      <p>
                        <Link className={cx("link")}>{product.title}</Link>
                      </p>
                      <p>{product.price}</p>
                      <div className={cx("models")}>
                        {product.model &&
                          product.model.map((item, idx) => (
                            <p className={cx("model")} key={idx}>
                              {item}
                            </p>
                          ))}
                      </div>
                      <p>{product.colors}</p>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;
