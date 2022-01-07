### README progress... ![95%](https://progress-bar.dev/95)

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
As a group of four ([**Isaac**](https://github.com/iglfranks), [**Sapphire**](https://github.com/sapphire-p), [**Oliver**](https://github.com/Olys6) and I) we were briefed to **build a full-stack application**. We had to decide on a common theme for the project so we all made a list of interests we had and from that we had a common interest in museums and decided to build a website dedicated to information about natural history museums in England.

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

- React.js.
- JavaScript.
- HTML.
- CSS.
- Bulma- CSS Framework. 
- Animate.css.
- Axios.
- Git.
- GitHub.
- Google Fonts.
- Figma- Wireframe.
- Insomnia- REST Client.
- Yarn.
- MongoDB.
- Node.js.
- Express.
- JSON Web Token.
- Asana- Planning.
- Zoom.
- Slack.
- Heroku.
- FontAwesome.
- Swiperjs.


## 4. Project Timeline- 7 Days

### Planning:
We first decided to create a museum mapper app as a group. We took our time to plan out the front-end and backend in pseudocode so we could build out these parts of the App successfully when it came to coding these parts. I used Fisma to develop wireframes after deciding on the basis for the App. After I finished the wireframes, we used Asana to determine which tasks needed to be performed and who would be in charge of completing them. 

<img width="450" alt="Home" src="https://user-images.githubusercontent.com/88886169/147878538-19704ac9-64bd-48e2-96e2-cdd0d5f39935.png"> <img width="450" alt="Index" src="https://user-images.githubusercontent.com/88886169/147878543-22a500f8-2de8-4a13-862c-c62f5bd679af.png"> <img width="450" alt="Register" src="https://user-images.githubusercontent.com/88886169/147878551-125d7493-15b7-4619-a3a5-00b076c220d4.png"> <img width="450" img height="340" alt="Screenshot 2022-01-02 at 14 21 09" src="https://user-images.githubusercontent.com/88886169/147878755-80600529-dab2-4ea7-9a31-39a7997c7e80.png">

### Work Split:

We all built out the backend together but the front-end tasks were split as follows:

#### 1. Sapphire:
Sapphire worked on the filter panel, filtered museums, map page, register and login pages. Sapphire worked on the error handling and CSS for her components. 

#### 2. Isaac:
Isaac worked on the show all museums page, single museum page, adding and deleting from favourites and the ratings functions. Isaac worked on the error handling and CSS for his components.

#### 3. Oliver:
Oliver worked on the logo, home page, standout museums, profile page and helped Isaac with the adding to the favourites function. Oliver worked on the error handling and CSS for his components.

#### 4. Kumar:
I worked on the navbar, footer, carousel feature, map data and some styling for the profile and single museum page. I worked on the error handling and CSS for my components.

### Getting Started:

### Backend

We agreed as a group to programme the backend components of the project together so that we could all help each other code this part and to also limit the amount of time spent on the backend. One person would screen share over a zoom video call and the others would guide the person coding and also look out for any errors/mistakes. The backend took a few days to create, with each member of the team coding, guiding and looking out for errors/mistakes during the live coding session. We also used this time to discuss and implement the embedded or referenced relationships for our App. In order to seed data into the App we divided certain letters within a database of museums to each member of the group to obtain details about the museum's location, key collections, and one image. Each member of the group then merged their museum data within the seeds file. The backend was created as a CRUD API, which used MongoDB, Mongoose, NodeJS and Express. Finally, I took up the task of adding better quality images and further images for each museum we had listed on the App, for the purposes of a carousel which I would later create. As we were creating a map with geo locations of each museum I also compiled a seeds file with the latitude and longitude location of each museum, this assisted my colleague who built the map component for the App.


### Front-end

For the front-end, we would meet in our daily stand ups (morning and evening) and discuss what components everyone wanted to focus on for the day and what they accomplished that day. I discussed above the components/features I built for this project.


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


### _**Navbar:**_ 
I used Bulma and FontAwesome to assist me in building out the Navbar component and then began adding navigation links to the Home (by clicking on the logo), All Museums, Museum Map, Exhibits, Profile, Login, Register and Logout. 

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

<img width="1000" alt="Not Logged In" src="https://user-images.githubusercontent.com/88886169/147880318-2aecba4c-d1d5-49f7-804f-5ff05df17113.png">
<img width="1000" alt="Logged In" src="https://user-images.githubusercontent.com/88886169/147880320-209fcac3-afc0-4bdd-a4df-b368afbce872.png">



### _**Footer:**_ 
I built out the footer with the help from Bulma and FontAwesome. I had the idea to have the copyright date automatically change based on the year, this would mean that I wouldn't have to manually change the year every year. I also wanted to add navigation links to every member of the group's GitHub pages. Finally I wanted to add some interactivity to the logo and I created a gif for the logo. It was during the coding for the footer that I came across the issue of the footer not sticking to the bottom of the page. I went away and did some research on the topic and found out that this was a common problem, especially when a particular page didn't have enough content. The simple fix was to give the particular component page a minimum viewport height, this fixed the issue.

```js
<div className="row">
  <p className="col-sm has-text-white is-size-7 has-text-centered mb-1"> 
  &copy;{new Date().getFullYear()} MUSEUM MAPPER INC | All rights reserved | Terms of Service | Privacy
  </p>
</div>
```

```js
<div className="row">
   <p className="col-sm has-text-white is-size-7 has-text-centered">
     Content Creaters: <a className="link is-size-7" id="links" href="https://github.com/iglfranks" rel="noreferrer" target="_blank">Isaac</a>, <a className="link is-size-7" id="links" href="https://github.com/Kumarmehta019" rel="noreferrer" target="_blank">Kumar</a>, <a className="link is-size-7" id="links" href="https://github.com/Olys6" rel="noreferrer" target="_blank">Oliver</a> and <a className="link is-size-7" id="links" href="https://github.com/sapphire-p" rel="noreferrer" target="_blank">Sapphire</a>
   </p>
</div>
```

<img width="1000" alt="Footer" src="https://user-images.githubusercontent.com/88886169/147881360-bc7b9ac7-6f8c-4923-8452-e33f059fe32f.png">

### _**Carousel:**_ 
In order to create the carousel component I had to research different libraries/dependencies that would help me create a carousel to display various images for each museum. The carousel component would then slot into the museum show component. I had to read through the documentation for Swiperjs and then implement the instructions for allowing the carousel to work. I also had to install the Swiperjs library to React. I wanted the carousel to slide through the museum pictures automatically so that the user could spend their time reading the description whilst the images changed.

```js

<section>
  {museumData ?
    <div className="swiper">
     <div className="swiper-wrapper">
       <Swiper spaceBetween={20} slidesPerView={1} centeredSlides={true} autoplay={{
         'delay': 5500,
         'disableOnInteraction': false
        }} pagination={{
          'clickable': true
        }} navigation={true} className="mySwiper">
          {museumData.map(image => {
            return (
             <SwiperSlide key={image}><img src={image} /></SwiperSlide>
            )
          })}
        </Swiper>
       </div>
      </div>
      :
      <h2 className="has-text-white is-size-5">{hasError ? 'Something went wrong' : 'Page Loading...'}</h2>
   }
</section>
```

<img width="450" alt="Screenshot 2022-01-02 at 16 15 44" src="https://user-images.githubusercontent.com/88886169/147881974-52b007d5-8c71-4f3a-9053-41eada1e85a9.png"> <img width="450" alt="Screenshot 2022-01-02 at 16 15 39" src="https://user-images.githubusercontent.com/88886169/147881978-8faeb7eb-98ff-4a65-bea9-eac0724eb149.png"> <img width="450" alt="Screenshot 2022-01-02 at 16 15 25" src="https://user-images.githubusercontent.com/88886169/147881983-9f1845fe-4d84-4e7c-85ec-59378ad129d2.png"> <img width="450" alt="Screenshot 2022-01-02 at 16 15 51" src="https://user-images.githubusercontent.com/88886169/147881984-afb2c91d-44e3-41cd-8a9a-440a3e46c92f.png">


### _**Styling:**_

The layout was created using the Bulma framework, CSS and FontAwesome. This really helped to provide the site with continuity and structure across all the pages of the App.


## 5. Bugs

- The App is not fully mobile responsive and with more time this could be fixed.
- There was a bug with the carousel images displaying half an image size, but I managed to fix this.
- The map doesn't seem to show up, since deploying the project on Heroku.

## 6. Wins and Challenges

### Wins:

- Group Coding - this was my first time working in a big group coding on a full-stack project. Our group worked really well together and really played to each other's strengths and weaknesses. Having an extra pair of eyes on a project really helps to overcome problems and think of different solutions to problems. It also improves your learning on topics/areas you require further development on.

- Functionality- Given the short time we were given, I am amazed at how far we came and what we were able to build. If given more time I wonder how much more we could have built out this App.

- Full-Stack Project- As this was my first full-stack project it was great to see how the front-end connected with the backend. It was also amazing how much we had accomplished as a group but also individually to build out this App.

### Challenges:

- One of the biggest challenges we faced during this project was completing the project to a standard we were all happy with. We were unable to implement a mobile responsive App but are extremely happy with the end result. 
- How to use Swiperjs and implement this in the project.
- How to use local storage to store data and use this data to display the username on the navbar.

## 7. Future Improvements

- Fix the bugs.
- Make the App mobile responsive.
- Add more CSS and styling to the App.
- Duplicate favourited museums can be added to the profile page.


## 8. Key Learnings

- Learning to read documentation for a new library and implementing it on the project.
- Learning to use Bulma CSS Framework.
- Utilising Insomnia to test API endpoints and get requests.
- Creating a wireframe on Figma.
- Learning to work as a group and working around each other's schedule.








