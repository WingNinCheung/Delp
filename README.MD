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
