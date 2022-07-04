# Delp

Delp is a single page app which publishes restaurants located in San Francisco Bay Area. Users are able to interact with Delp for finding their desired restaurants and viewing/writing reviews and ratings on a specific restaurant.

## Links

- <a href="https://delp-react.herokuapp.com/"> Live Site
- <a href="https://github.com/WingNinCheung/Delp/wiki/Database-Schema"> Database Schema
- <a href="https://github.com/WingNinCheung/Delp/wiki/Feature-List"> Feature List
- <a href="https://github.com/WingNinCheung/Delp/wiki/Dedux-State-Shape"> Redux State Shape
- <a href="https://github.com/WingNinCheung/Delp/wiki/API-Routes"> API Routes

# Technologies Used
  
## Frontend
  
<div>
	<a href="https://reactjs.org/"><img height="65" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" alt="React" title="React" /></a>
        <a href="https://redux.js.org/"><img height="70" src="https://miro.medium.com/max/624/1*SRL22ADht1NU4LXUeU4YVg.png"></a>
	<a href="https://www.javascript.com/"><img height="70" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></a>
	<img height="70" src="https://user-images.githubusercontent.com/25181517/117447535-f00a3a00-af3d-11eb-89bf-45aaf56dbaf1.png" alt="HTML" title="HTML" />
	<img height="70" src="https://user-images.githubusercontent.com/25181517/117447663-0fa16280-af3e-11eb-8677-bcf8e4f8e298.png" alt="CSS" title="CSS" />
</div>

## Backend
<div>
  <a href="https://expressjs.com/"><img height="35" src="https://4thpointer.com/wp-content/uploads/2020/12/ExpressJS.png"></a>
  <a href="https://nodejs.org/en/"><img height="60" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"></a>
  <a href="https://sequelize.org/"><img height="80" src="https://camo.githubusercontent.com/58e35d08b53ec029f0e3e587a28a6f65777d352f797add843d153a0db60b9d7d/68747470733a2f2f692e696d6775722e636f6d2f79764559686e5a2e706e67"></a>
  <a href="https://www.postgresql.org/"><img height="90" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL"></a>
</div>

## APIs & Hosting

<div>
  <a href="https://developers.google.com/maps"><img height="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85Wwok6vlXcpiENA_EzgXqkm3nHrciXeNkaPuHDN2Mpdm-cX2nMRAbuBijGflcRmRu6A&usqp=CAU"></a>
  <a href="https://dashboard.heroku.com/apps/"><img height="35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png"></a>
</div>

# Getting Started

1. Clone this repository

	```
	git clone https://github.com/WingNinCheung/Delp.git
	```
2. Install dependencies

	```
	npm install
	```
3. Create an .env file in the root for your development environment

4. Setup a PostgreSQL user and password with the numbers on your .env file
	
5. Run, migrate and seed your database	

	```
	npx dotenv sequelize db:create
	npx dotenv sequelize db:migrate
	npx dotenv sequelize db:seed:all
	```
6. Run the server. Run the below twice on the fronend and backend directories


	```
	npm start
	```
# Features & Screenshots

## Landing Page

- Users must log in to access the website

<img width="960" alt="Screen Shot 2022-07-04 at 2 31 05 PM" src="https://user-images.githubusercontent.com/96600317/177218299-cbba746f-c4b7-406f-8579-adf4d09b5617.png">

## User Authentication

- Users can log in with their existing account. Alternatively, all users can log in with the Demo Login feature.

<img width="1870" alt="Screen Shot 2022-07-04 at 2 36 09 PM" src="https://user-images.githubusercontent.com/96600317/177218474-80019e52-9a1a-4871-9ccc-f0d7670122fe.png">

- Users can sign up. The user name must be unique and the password and confirm password have to be exactly the same in order to sign up successfully.

<img width="960" alt="Screen Shot 2022-07-04 at 2 38 41 PM" src="https://user-images.githubusercontent.com/96600317/177218633-77f64f55-d8fc-4181-9b54-cc973aa96dfc.png">

## Home Page

- A logged in user will see additional links on the navigation bar: Home, Add My Business. A user can click the profile icon on the top right corner. A user can see his/her user name, email and log out button. When the user click the log out button, he/she will then get logged out and redirected to the landing page.

<img width="1848" alt="Screen Shot 2022-07-04 at 2 41 33 PM" src="https://user-images.githubusercontent.com/96600317/177218791-117a599c-740f-4173-ad25-cbd961acf639.png">

## Business Details

- When a user clicks on a business in the home page, the user will be redirected to the business detail page.
- The page contains a default cover image, a food photo from the business,the information of the business including address, description, a google map of the business's acuual location and the review section.
<img width="1900" alt="Screen Shot 2022-07-04 at 2 47 19 PM" src="https://user-images.githubusercontent.com/96600317/177219151-b88e1707-088f-4ffd-8f5f-f66d0e501ddd.png">

### Add a Business

- A user can add a business to the list by clicking Add My Business in the navigation bar.
- After filing all requried informations, a user can click Add business to add it to the list. The user will get redirected to the detail page of this newly created business. The business will get added to the bottom of the list in the home page.

<img width="1807" alt="Screen Shot 2022-07-04 at 2 53 31 PM" src="https://user-images.githubusercontent.com/96600317/177219569-490e3313-fb91-4de9-917f-819c6cb19c34.png">

<img width="1870" alt="Screen Shot 2022-07-04 at 2 59 49 PM" src="https://user-images.githubusercontent.com/96600317/177220472-e172c175-054a-4cfd-aa37-e3db771ab109.png">

- A user can edit or delete the business from the list. Note that only the user who created the business have the authorization to edit/delete it.
- To edit it, a user can simply click Edit Info and click Save after.
- To delete it ,a user can simply click Delete Business and it will redirect the user to the home page. The business will get automatically removed from the list and database.

<img width="1735" alt="Screen Shot 2022-07-04 at 3 01 44 PM" src="https://user-images.githubusercontent.com/96600317/177220581-52cf6231-6a44-4f9b-a932-b25df2689355.png">


## Review Section

- A user can see all of the reviews/comments.
- When hovering over a review, a shadow will appear to let the user know which review is the point of focus.

<img width="1907" alt="Screen Shot 2022-07-04 at 3 07 13 PM" src="https://user-images.githubusercontent.com/96600317/177220858-97f1cefa-a69e-4b6c-b27b-8d46e0a773cb.png">

- A user can write a review at the bottom of the page.

<img width="1565" alt="Screen Shot 2022-07-04 at 3 08 37 PM" src="https://user-images.githubusercontent.com/96600317/177220916-1384eefd-562f-406e-afd3-b6272ece7f90.png">

- When a user finishs their reviews, the user can simply click Post Review and the review will get added to the page and the user will not get redirected.

<img width="1350" alt="Screen Shot 2022-07-04 at 3 11 22 PM" src="https://user-images.githubusercontent.com/96600317/177221086-526c5bbd-b057-4e1c-a714-c08874ed2e7a.png">

- A user can also delete the reviews that he/she writes by clicking the delete button under its review.

## To-dos/future features

- Filters - Allow users to filter search results by specifications.
- likes feature - Allow users to like the business and display the likes count in the home page
- Search
- Tags

## Technical Challenges 

### Redux Store Hydration

**Problem** : One of the biggest challenges is that when a user deletes the business that he/she creates, the business will still show on the list(home page) unless I refresh the page.

**My observation** : 

- I spent a great amount of time to debug and I observed that the business was deleted on the database successfully, therefore the code/setup for the API routing in the backend and fetching were correct and bugs free.

```
// backend - API route
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const business = await Business.findByPk(id);
    
    await Review.destroy({
      where: { businessId: business.id },
    });

    await Business.destroy({
      where: { id: business.id },
    });
    return res.json(id);
  })
);
```

```
// fontend - Redux store & action function

const deleteOneBusiness = (businessId) => {
  return {
    type: DELETE_BUSINESS,
    businessId,
  };
};

export const deleteBusiness = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/business/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const businessId = await res.json();
    dispatch(deleteOneBusiness(businessId));
    return businessId;
  }
};

```

- After ensuring the API route and fetching were setup correctly, I focused on the Redux store/state and found that there was a race condition happening between the deletion on the Redux store and redirecting to the home page which displayed all businesses contained in the store. 

- In other words, the page redirection command was hit faster than the API fetching. As a result, when the user clicks the Delete Business button, the user will get redirected to the home page which contains a list of businesses, but the business that the user wants to delete is still on the page **because the Redux store has not yet been updated.**

**My Solution**

- I used a setTimeout function with a timer of 0.3 seconds which ensures that the store will get updated before the dispatch. As a result, when the user gets redirected to the home page, the useEffect() will trigger and will dispatch the getBusinesses() action after 0.3 seconds. The business will then removed from the page,database and Redux store.

```
useEffect(() => {
    let time = setTimeout(() => {
      dispatch(getBusinesses());
    }, 300);

    dispatch(getAllReviews());

    return () => clearTimeout(time);
  }, [dispatch]);
```
