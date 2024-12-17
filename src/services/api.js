import { useEffect, useState } from "react";
const UseFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error));
  }, []);

  return { products, error };
};
// list currency
const Country = (url) => {
  const [countriesCurrencies, setCountriesCurrencies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountriesCurrencies(data))
      .catch((error) => setError(error));
  }, []);
  return { countriesCurrencies, error };
};
//Promos
const Promos = (url) => {
  const [promos, setPromos] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPromos(data))
      .catch((error) => {
        setError(error);
      });
  }, []);
  return { promos, error };
};
/// categories
const Categories = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/assets/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setListProducts(data.categories);
      })
      .catch((error) => {
        console.error("error fetching categories", error);
        setLoading(false);
      });
  }, []);

  return { listProducts, loading };
};
//comments
const Comments = () => {
  const [isComments, setIsComments] = useState([]);
  const [errorComments, setErrorComments] = useState(true);
  useEffect(() => {
    fetch("/assets/categories.json")
      .then((res) => res.json())
      .then((data) => setIsComments(data.comments.home))
      .catch((error) => {
        console.error("error fetching Comments ", error);
        setErrorComments(false);
      });
  }, []);
  return { isComments, errorComments };
};
//Q&A
const QA = () => {
  const [isFAQs, setIsFAQs] = useState([]);
  const [errorFAQs, setErrorFAQs] = useState(true);
  useEffect(() => {
    fetch("/assets/categories.json")
      .then((res) => res.json())
      .then((data) => setIsFAQs(data.Q_A.questions))

      .catch((error) => {
        console.log("fail fetching Q&A", error);
        setErrorFAQs(false);
      });
  }, []);
  return { isFAQs, errorFAQs };
};
//footer
const Foot = () => {
  const [foots, setFoots] = useState([]);
  const [errorFoot, setErrorFoot] = useState(true);
  useEffect(() => {
    fetch("/assets/categories.json")
      .then((res) => res.json())
      .then((data) => setFoots(data.footer))
      .catch((error) => {
        console.log("fail fetching Footer", error);
        setErrorFoot(false);
      });
  }, []);
  return { foots, errorFoot };
};
export { UseFetch, Country, Promos, Categories, Comments, QA, Foot };
