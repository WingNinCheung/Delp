import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import { useEffect } from "react";

export const Home = () => {
  const dispatch = useDispatch();
  const allBusinesses = useSelector((state) => state.business);

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  console.log(allBusinesses);
};
