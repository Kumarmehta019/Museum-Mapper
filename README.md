### README progress... ![15%](https://progress-bar.dev/15)

# SEI Project Three: Museum Mapper

## Table of Contents:

|  **No:**     | **Content** |
| -------- | ------- |
|    1    | **`Project Overview`**|
|    2     | **`The Brief and Technical Requirements`**|
|    3    | **`Technologies Used`**|
|    4     | **`Project Timeline - 7 Days`**|
|    5     | **`Bugs`**|
|    6     | **`Wins and Challenges`**|
|    7     | **`Future Improvements`**|
|    8     | **`Key Learnings`**|

 ## 1. Project Overview
As a group of four, we were briefed to **build a full-stack application**. As a group we had to decide on a common theme for the project. We all made a list of interests we had and from that we both had a common interest in museums and decided to build a website dedicated to information about natural history museums in England.

<img width="1800" alt="Home" src="https://user-images.githubusercontent.com/88886169/147877473-e40126bc-dcea-435a-a9f3-198d08c720b2.png">

#### Deployed version available here: 👉🏽👉🏽[*Museum Mapper*](https://museummapperkm.herokuapp.com/) 👈🏽👈🏽

### Resources:
> The following websites assisted with this project:
> 1. [React](https://reactjs.org/)
> 2. [MongoDB](https://www.mongodb.com/)
> 3. [Wikipedia](https://en.wikipedia.org/wiki/Category:Natural_history_museums_in_England)

## 2. Project Brief and Technical Requirements

- **Build a full-stack application** by making your own backend and your own front-end
- **Use an Express API** to serve your data from a Mongo database
- **Consume your API with a separate front-end** built with React
- **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
- **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
- **Have a visually impressive design**
- **Be deployed online**

## 3. Technologies Used

- React.js
- JavaScript (ES6)
- HTML5
- CSS
- Bulma- CSS Framework 
- Animate.css
- Axios
- Git
- GitHub
- Google Fonts
- Fisma- Wireframe
- Insomnia- REST Client
- Yarn
- MongoDB
- NodeJS
- Express
- JSONWebToken
- Asana- Planning
- Zoom
- Slack
- Heroku
- FontAwesome


## 4. Project Timeline- 7 Days

### Planning:
We first decided to create a museum mapper app as a group. We took our time to plan out the front-end and backend in pseudocode so we could build out these parts of the app successfully when it came to coding these parts. I used Fisma to develop wireframes after deciding on the basis for the app. After I finished the wireframes, we utilised Asana to determine which tasks needed to be performed and who would be in charge of completing them. 

<img width="450" alt="Home" src="https://user-images.githubusercontent.com/88886169/147878538-19704ac9-64bd-48e2-96e2-cdd0d5f39935.png"> <img width="450" alt="Index" src="https://user-images.githubusercontent.com/88886169/147878543-22a500f8-2de8-4a13-862c-c62f5bd679af.png"> <img width="450" alt="Register" src="https://user-images.githubusercontent.com/88886169/147878551-125d7493-15b7-4619-a3a5-00b076c220d4.png"> <img width="450" img height="340" alt="Screenshot 2022-01-02 at 14 21 09" src="https://user-images.githubusercontent.com/88886169/147878755-80600529-dab2-4ea7-9a31-39a7997c7e80.png">


### Getting Started:

### Backend

We agreed as a group to programme the backend components of the project together so that we could all help each other code this part and to also limit the amount of time spent on the backend. One person would screenshare over a zoom videocall and the others would guide the person coding and also look out for any errors/mistakes. The back end took a few days to create, with each member of the team coding, guiding and looking out for errors/mistakes during the live coding session. We also used this time to discuss and implement the embedded or referenced relationshiops for our App. In order to seed data into the app we divided certain letters within a databas of museums to each member of the group to obtain details about the museum's location, key collections, and one image. Each member of the group then merged their museum data within the seeds file. The backend was created as a CRUD API, which used MongoDB, Mongoose, NodeJS and Express. Finally, I took up the task of adding better quality images and further images for each museum we had listed on the App, for the purposes of a carousel which I would later create. As we were creating a map with geolocations of each museum I also compiled a seeds file with the lattitude and longitude location of each museum, this assisted my colleqgue who build the map component for the App.



### Front-end

For the front-end, we would meet in our daily stand ups (morning and evening) and discuss what components everyone wanted to focus on for the day and what thewy acomplished that day. For this project, I worked on the Navbar, Footer, Favicon, Carousel and part of the Profile. I also worked on the CSS for the App.


### Routes:
The routes to the various pages/components were built using `React` as well as `BrowserRouter`, `Switch` and `Route` from `React-Router-Dom`.

```javascript
    <BrowserRouter>
      <NavBar />
      <div className="site-wrapper">
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/museums' component={MuseumsIndex} />
          <Route exact path='/museums/:id' component={MuseumShow} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route exact path='/filteredmuseums' component={FilteredMuseums} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/map' component={Map} />
          <Route exact path='/exhibits' component={StandoutExhibit} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
```


### Components:

Once I installed the dependencies I needed for the project I started building out the different components I decided to build, as per the wireframe and our Asana tasks. 

**Navbar:** I used Bulma and FontAwesome to assist me in building out the Navbar component and then began adding navigation links to the Home (by clicking on the logo), All Museums, Museum Map, Exhibits, Profile, Login, Register and Logout. 

If a user was not logged in, I wanted the navbar to display the options 'Register' or 'Login,' and if the user was logged in, I wanted the navbar to show the options 'Logout,' and the 'Profile name' To do this, I utilised a ternary that determines whether or not the user is authenticated. The userIsAuthenticated function first determines whether or not a payload exists; if it does not, false is returned. The function then checks if the current time of the token is less than the expiry time, and if it returns true, the user can be authenticated. I also used the token to display the username and then use that to display on the profile name.


```js

const userIsAuthenticated = () => {
   const payload = getPayload()
   if (!payload) return false
   const now = Math.round(Date.now() / 1000)
   return now < payload.exp
}
```



```js
<div className="navbar-end">
 {!userIsAuthenticated() ?
     <>
        <div className="navbar-item"><Link to="/register" className="link is-size-6 has-text-weight-light"><i className="fas fa-clipboard-check has-text-success-dark"></i> Register</Link></div>
        <div className="navbar-item"><Link to="/login" className="link is-size-6 has-text-weight-light"><i className="fas fa-sign-in-alt has-text-danger-dark"></i> Login</Link></div>
     </>
     :
     <>
        <div className="navbar-item"><Link to="/profile" className="link is-size-6 has-text-weight-light"><i className="fas fa-user has-text-info"></i> {username}</Link></div>
        <div className="navbar-item"><a className="link is-size-6 has-text-weight-light" onClick={handleLogout}><i className="fas fa-sign-out-alt has-text-danger-dark"></i> Logout</a></div>
     </>
 }
</div>
```



**Homepage:** We bagan creating the homepage by adding a background using CSS, three buttons (one for each card category) and a search bar. We then built out the homepage by using `Link` import from `React-Router-Dom` to navigate to the three card category pages. For finishing touches, we added some animations to the buttons.

```javascript
const Home = () => {

  return (
    <section className='section' id='hero'>
      <div className='hero-body'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='field'>
          <p className='control has-icons-right'>
            <input className='input is-medium is-link' type='search' placeholder='Search...' />
            <span className='icon is-large is-right'>
              <i className='search'>⏎</i>
            </span>
          </p>
        </div>
        <div className='has-text-centered' id='buttons'>
          <Link to='/spells'><button className='button is-success is-medium is-rounded has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Spell Cards</button></Link>
          <Link to='/traps'><button className='button is-danger is-medium is-rounded has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Trap Cards</button></Link>
          <Link to='/monsters'><button className='button is-warning is-medium is-rounded has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Monster Cards</button></Link>
        </div>
      </div>
    </section>
  )

}
export default Home

```

**Monster, Spell & Trap pages:** These card category components were created one after another using different API endpoint get requests, they showed all the Yu-Gi-Oh cards based on the category. The data received was then displayed on the corresponding page using the `.map` method on the array of cards. An `IndexMap.js` helpers file was created to store props for how the cards should be displayed and was imported into the component to use for each card category page (rather than repeating the code over and over again).

```javascript
import React from 'react'
import { Link } from 'react-router-dom'


const IndexMap = (props) => {

  return (
    <div key={props.id} className='column is-one-fifth-desktop'>
      <Link to={`/${props.id}`}>
        <div className='card'>
          <div className='card-header has-background-black'>
            <div className='card-header-title is-centered cardTitle has-text-white is-underlined pl-0 pr-0 pt-3 pb-3 '>{props.name}</div>
          </div>
          <div className='card-image animate__animated animate__pulse animate__infinite animate__slower'>
            <figure className='image is-1'>
              <img src={props.card_images[0].image_url} alt={props.name} />
            </figure>
          </div>
          <div className='card-content pl-0 pr-0 pt-2 pb-1 has-text-centered has-background-black has-text-white has-text-weight-bold'>
            <h5 className="price">£ {props.card_prices[0].ebay_price}</h5>
          </div>
        </div>
      </Link>
    </div>
  )

}
export default IndexMap
```
<img width="1594" alt="Monster Cards" src="https://user-images.githubusercontent.com/88886169/146175796-062894b8-f491-44d8-a909-b6351510c267.png">
<img width="1594" alt="Spell Cards" src="https://user-images.githubusercontent.com/88886169/146175810-24040fc8-c1b2-41ff-aa4a-5c9a3bac7c8b.png">
<img width="1594" alt="Trap Cards" src="https://user-images.githubusercontent.com/88886169/146175815-51e594bd-731f-4b58-b785-b0c38a87b891.png">

**Card Show:** The card show component is a page that would display further information about each card (image, name, description and its price). Buttons to add and remove the card from the user's wishlist were also added. The url for each cocktail was used using the id of the card which we then added to `App.js` as an additional file path route `<Route path="/cocktail/:id">`. We used the id `useParams` from `react-router-dom` to add the id of the card to the API get request and then display this information on the page. We also attempted to add cards to the user's `Wish List` page by creating `add to Wish List`  and `remove from Wish List` buttons. We then created an onclick function on each button that would either add the id of the card or remove the id of the card from local storage. We, unfortunately, ran out of time to build out the add and remove to Wish List feature.

```javascript
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import 'animate.css'

const CardShow = () => {

  const [chosenCard, setChosenCard] = useState(null)
  const [hasError, setHasError] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
        setChosenCard(data.data)
        console.log('Chosen card', chosenCard)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()

  }, [id])

  const handleAdd = () => {
    window.localStorage.setItem(`wishListCard${window.localStorage.length}`, id)
  }

  const handleRemove = () => {
    for (let i = 0; i < window.localStorage.length; i++) {
      const myValue = window.localStorage.getItem(`wishListCard${i}`)
      if (myValue === id) {
        window.localStorage.removeItem(`wishListCard${i}`)
      }
    }
  }

```


<img width="1581" alt="Card Show" src="https://user-images.githubusercontent.com/88886169/146180806-753afb21-94ff-4fc4-be26-64a72f76a25c.png">

**Wish List:** The Wish List component is a page that displays the user's cards that they have added to the wishlist. Unfortunately, we had run out of time to implement this feature. We wanted the user to have a collection of cards that they had added to the wishlist and there would be a total cost of buying these cards.

**Styling:**

The layout was created using the Bulma framework and with a bit of help from CSS. This really helped to provide the site with continuity and structure across all the pages of the website. Animate.css was used to animate the website and give various functions on the website an aesthetically pleasing feel.


## 5. Bugs

- The random button doesnt work when you first click on it but when you click on it again, it works.
- The Wish List on the card show page doesn't work properly, but this may also be due to running out of time.

## 6. Wins and Challenges

### Wins:

- Pair Coding - this was my first time pair coding on a project. Isaac and I worked really well together and really played to each other's strengths and weaknesses. Having an extra pair of eyes on a project really helps to overcome errors that each of us might have. It also improves your learning on topics/areas you require further development on.

- Functionality- Given the short time we were given, I am amazed at how far we came and what we were able to build. If given more time I wonder how much more we could have built out this website and completed the components we didn't get around to completing.

- React and APIs- Using React and a public API to create a website which displays the information to a user in a fun and aesthetically pleasing way.

### Challenges:

- Time - one of the biggest challenges we faced during this project was completing the project to a standard we were both happy with. We were unable to implement the search and the Wish List functionality, which we could have if we were given more time. These however were stretch goals for us as our main purpose was to display the three card categories and individual card show page. 

- Bulma CSS Framework - Figuring out how to use the different components of Bulma and what variations you could make to these took some time to figure out, but it was also a win as we both knew how to use Bulma by the end of the project.

## 7. Future Improvements

- Fix the bugs
- Make the website mobile responsive
- complete the Wish List functionality
- complete the search functionality


## 8. Key Learnings

- Learning to use React `useEffect` and `useState` as well as the React-Router-Dom. 
- Learning to use Bulma CSS Framework
- Utilising Insomnia to test API endpoints and get requests
- Creating a wireframe on Figma
- Learning to work as a pair and working around each others schedule





