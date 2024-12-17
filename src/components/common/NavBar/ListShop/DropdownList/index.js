import { Categories } from "../../../../../services/api";
const DownList = () => {
  const { listProducts } = Categories();
  // just take 3 first  products in the list
  const firstThreeProducts = (CategoryName) => {
    return Array.isArray(listProducts[CategoryName])
      ? listProducts[CategoryName].slice(0, 3)
      : [];
  };
  const amplifiers = firstThreeProducts("Amplifiers");
  const headphones = firstThreeProducts("Headphones");
  const homeAudio = firstThreeProducts("homeAudio");
  const mouse = firstThreeProducts("mouse");
  const microPhone = firstThreeProducts("microPhone");
  //short Name
  const briefName = (name) => {
    return name.slice(-6);
  };
  return {
    amplifiers,
    headphones,
    homeAudio,
    mouse,
    microPhone,
    briefName,
  };
};
export default DownList;
