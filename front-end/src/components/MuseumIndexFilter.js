import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MuseumCard from './MuseumCard'

const MuseumIndexFilter = () => {

  const [museums, setMuseums] = useState(null)

  // error handling
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        data.sort((a, b) => {
          if (a.name < b.name) {
            return -1
          } else if (a.name > b.name) {
            return 1
          } else {
            return 0
          }
        })
        setMuseums(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])


  const handleRegionChange = (event) => {
    console.log(event.target.value)
  }

  const handleCollectionTypeChange = (event) => {
    console.log(event.target.value)
  }

  // const handleSubmit = () => {

  // }


  console.log(museums)

  return (
    <>
      {museums ?
        <div className='has-background-black'>

          <section className='hero is-medium'>
            <div className='hero-body showAllHero'>
              <p className='title has-text-white'>Museums</p>
              <p className='subtitle has-text-white'>Check out these fascinating natural history collections across England</p>
            </div>
          </section>
          <section className='section'>
            <div className='container museumsCardContainer'>



              <section id='index-filter-panel' className='mb-5'>
                <div className='field is-horizontal is-grouped is-grouped-centered py-3 px-5'>
                  <div className='field-body'>

                    <div className='field'>
                      <div className='control'>
                        <div className='select is-danger is-rounded is-fullwidth'>
                          <select className='has-background-white has-text-weight-bold has-text-black' id='index-filter-panel-region' name='regions' onChange={handleRegionChange}>
                            <option value='All regions'>Region</option>
                            <option value='All regions'>Any region</option>
                            <option value='East of England'>East of England</option>
                            <option value='East Midlands'>East Midlands</option>
                            <option value='London'>London</option>
                            <option value='North East'>North East</option>
                            <option value='North West'>North West</option>
                            <option value='South East'>South East</option>
                            <option value='South West'>South West</option>
                            <option value='West Midlands'>West Midlands</option>
                            <option value='Yorkshire and the Humber'>Yorkshire and the Humber</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className='field'>
                      <div className='control'>
                        <div className='select is-danger is-rounded is-fullwidth'>
                          <select className='has-background-white has-text-weight-bold has-text-black' id='index-filter-panel-collection-types' name='collectionTypes' onChange={handleCollectionTypeChange}>
                            <option value='Any collection type'>Museum includes collection type</option>
                            <option value='Any collection type'>Any collection type</option>
                            <option value='botany'>Botany</option>
                            <option value='entomology'>Entomology</option>
                            <option value='geology'>Geology</option>
                            <option value='palaeontology'>Palaeontology</option>
                            <option value='zoology'>Zoology</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className='control'>
                        <button className='button is-rounded has-background-danger has-text-white has-text-weight-bold is-fullwidth'><i className="fas fa-search mr-1"></i>Filter Museums</button>
                      </div>
                    </div>

                  </div>
                </div>
              </section>



              <div className='columns is-multiline'>
                {museums.map(museum => {
                  return (
                    <div key={museum._id} className='column is-one-quarter-desktop animate__animated animate__faster museumCard'>
                      <MuseumCard key={museum._id} {...museum} />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
        :
        <>
          {hasError ?
            <section id='errorMessageHero-MuseumIndex' className='hero'>
              <div className='hero-body showAllHero'>
                <p className='title has-text-white'>Oops! Something went wrong...</p>
                <p className='subtitle has-text-white'>Refresh the page or try another link</p>
              </div>
            </section>
            :
            <section className='hero is-medium'>
              <div className='hero-body showAllHero'>
                <p className='title has-text-white'>Loading...</p>
              </div>
            </section>
          }
        </>
      }

    </>
  )

}

export default MuseumIndexFilter




{/* <div>
<section id='index-filter-panel' className='mb-5'>
  <div className='field is-horizontal is-grouped is-grouped-centered p-3'>
    <div className='field-body'>
      <div className='field'>
        <div className='control'>
          <div className='select is-danger is-rounded'>
            <select className='has-background-white has-text-weight-bold has-text-black' id='index-filter-panel-region' name='regions' onChange={handleChange}>
              <option value='Region'>Region</option>
              <option value='East of England'>East of England</option>
              <option value='East Midlands'>East Midlands</option>
              <option value='London'>London</option>
              <option value='North East'>North East</option>
              <option value='North West'>North West</option>
              <option value='South East'>South East</option>
              <option value='South West'>South West</option>
              <option value='West Midlands'>West Midlands</option>
              <option value='Yorkshire and the Humber'>Yorkshire and the Humber</option>
            </select>
          </div>
        </div>
      </div>
      <div className='field is-flex is-align-items-center'>
        <div className='control'>
          <label id='checkboxes-text1' className='label is-fullwidth has-text-black'>Collection Types:</label>
        </div>
      </div>
      <div className='field is-flex is-align-items-center'>
        <div className='control'>
          <label id='checkboxes-text2' className='checkbox has-text-black'>
            <input type='checkbox' name='geology' onChange={handleChange} />
            <span className="pl-1">Geology</span>
          </label>
        </div>
      </div>
      <div className='field is-flex is-align-items-center'>
        <div className='control'>
          <label id='checkboxes-text3' className='checkbox has-text-black'>
            <input type='checkbox' name='palaeontology' onChange={handleChange} />
            <span className="pl-1">Palaeontology</span>
          </label>
        </div>
      </div>
      <div className='field is-flex is-align-items-center'>
        <div className='control'>
          <label id='checkboxes-text4' className='checkbox has-text-black'>
            <input type='checkbox' name='botany' onChange={handleChange} />
            <span className="pl-1">Botany</span>
          </label>
        </div>
      </div>
      <div className='field is-flex is-align-items-center'>
        <div className='control'>
          <label id='checkboxes-text5' className='checkbox has-text-black'>
            <input type='checkbox' name='zoology' onChange={handleChange} />
            <span className="pl-1">Zoology</span>
          </label>
        </div>
      </div>
      <div className='field is-flex is-align-items-center'>
        <div className='control'>
          <label id='checkboxes-text6' className='checkbox has-text-black'>
            <input type='checkbox' name='entomology' onChange={handleChange} />
            <span className="pl-1">Entomology (insects)</span>
          </label>
        </div>
      </div>
      <div>
        <div className='control'>
          <Link to={{ pathname: '/filteredmuseums', state: filteredMuseumsArr }} className='button is-rounded has-background-danger has-text-white has-text-weight-bold is-fullwidth'><i className="fas fa-search mr-1"></i>Find Museums</Link>
        </div>
      </div>
    </div>
  </div>
</section>
</div> */}
