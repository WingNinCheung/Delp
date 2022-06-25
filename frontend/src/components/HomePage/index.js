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
      <div className="add-business">
        <button> Add My Business</button>
      </div>
      <div className="business-list">
        {allBusinesses.map((business) => (
          <NavLink to={`/business/${business.id}`}>
            <div>
              <img
                height="300px"
                src={business.imageUrl}
                alt={`business.title`}
              ></img>
              <div>
                {business.title} #{business.description}
              </div>
              <div>
                {business.address}, {business.city}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
