import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import ScrollAnimation from 'react-animate-on-scroll'




const FeaturedMuseum = () => {

  const [featuredMuseums, setFeaturedMuseums] = useState([])

  // const Animation = () => {
  //   return (
  //     <ScrollAnimation animateIn="fadeIn">
  //       <h1>TESTING SCROLL</h1>
  //     </ScrollAnimation>
  //   )
  // }


  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        // console.log(data)
        // setFeaturedMuseums(data[2])
        setFeaturedMuseums(data[Math.floor(Math.random() * 31)])
        // console.log('ONE OF THE MUSEUMS ->', featuredMuseums)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])



  return (
    <section className="hero is-black is-fullheight" id="featured-container">
      <a href='#featured-container' className="title has-text-centered is-size-1 featuredMuseumTitle">Featured Museum</a>
      <a href='#featured-container' className="has-text-centered arrowBelowTitle animate__animated animate__infinite animate__slower animate__bounce"><i className="fas fa-angle-down"></i></a>
      <div className="hero-body">
        <div className="columns container is-full">
          <div className="column is-half custom-flex ">
            <h1 className="title hero-title mb-6 has-text-centered is-size-2">
              {featuredMuseums.name}
            </h1>
            <p className="subtitle hero-subtitle">{featuredMuseums.description}</p>
            <Link to={`/museums/${featuredMuseums.id}`} >
              <button  className="button is-white is-fullwidth visitWebiteBtn is-large">
                {/* <i className="fas fa-info-circle infoIcon">
                </i>  */}
                More Info
              </button>
            </Link>
          </div>
          <div className="column is-half show-size ">
            <img className="heroImageHome" src={featuredMuseums.image} />

          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMuseum

// {
//   params: { id: '' }
// })