import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const BusinessDetail = () => {
  const { id } = useParams();
  let thisBusiness;

  const allBusiness = useSelector((state) => state.business);
  for (const business in allBusiness) {
    if (id === business) {
      thisBusiness = allBusiness[business];
    }
  }

  return (
    <>
      <div
        className="banner-session"
        style={{
          backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/04/35/10/88/1000_F_435108880_mRcvr6sG48Ot7PPBwbK6WNmz9xaZdKtG.jpg)`,
          height: "50%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <h1 style={{ color: "white" }}>{thisBusiness.title}</h1>
      </div>
      <div className="detail-container">
        <div className="photo">
          <h2>Photo</h2>
          <img src={thisBusiness.imageUrl} alt={`${thisBusiness.title}`}></img>
        </div>
        <div className="info-detail">
          <h2>Info</h2>
          <div className="description">
            <h3>Description</h3>
            {thisBusiness.description}
          </div>
          <div className="address">
            <h3>Address</h3>
            {thisBusiness.address},{thisBusiness.city},{thisBusiness.state},
            {thisBusiness.zipCode}
          </div>
        </div>
        <div className="review">
          <h2>Reviews</h2>
        </div>
      </div>
    </>
  );
};
