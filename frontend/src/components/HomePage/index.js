import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const allBusinesses = useSelector((state) => Object.values(state.business));

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  return (
    <>
      <div className="business-list">
        <div className="intro"> Restaurants in San Francisco, CA</div>
        {allBusinesses.map((business) => (
          <NavLink
            className="nav-area"
            key={`${business.id}`}
            to={`/business/${business.id}`}
          >
            <div className="business-card">
              <img
                className="food-img"
                height="300px"
                src={business.imageUrl}
                alt={`business.title`}
              ></img>
              <div className="word-session">
                <div className="bus-title">
                  <div className="b">{business.title}</div>
                </div>
                <div className="bus-des">
                  <div className="b">{business.description}</div>
                </div>
                <div className="bus-address">
                  <i className="fas fa-location-arrow" />
                  {business.address}, {business.city}, {business.state},{" "}
                  {business.zipCode}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
