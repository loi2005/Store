import useFetchGeneral from "./api";
const UseFetch = (url) => useFetchGeneral(url);

const Country = (url) => useFetchGeneral(url);

const Promos = (url) => useFetchGeneral(url);

const Categories = () =>
  useFetchGeneral("/assets/categories.json", "categories");

const Comments = () =>
  useFetchGeneral("/assets/categories.json", "comments.home");

const QA = () => useFetchGeneral("/assets/categories.json", "Q_A.questions");

const Foot = () => useFetchGeneral("/assets/categories.json", "footer");

export { UseFetch, Country, Promos, Categories, Comments, QA, Foot };
