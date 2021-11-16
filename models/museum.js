import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const reviewSchema = new mongoose.Schema({
  comment: { type: String, required: true, maxlength: 500 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
},
  {
    timestamps: true
  }
)

const exhibitSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 200 },
  image: { type: String, required: true },
  description: { type: String, maxlength: 1000 }
})

const museumSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  region: { type: String, required: true },
  date_established: { type: Number, required: true },
  description: { type: String, required: true, maxlength: 5000 },
  collection_types: [{ type: String, required: true }],
  exhibits: [exhibitSchema],
  website: { type: String, required: true },
  multiple_images: [{ type: String, required: false }],
  location_id: [{ type: Number, required: false }],
  latitude: [{ type: Number, required: false }],
  longitude: [{ type: Number, required: false }],
  reviews: [reviewSchema]
})

// Virtual Getter: virtual field added to object before it is json
museumSchema.virtual('averageRating')
  .get(function () {
    // if there are no comments return a string
    if (!this.reviews.length) return 'Not Reviewed'
    // iterate through reviews, add up all ratings
    const sumOfRatings = this.reviews.reduce((acc, review) => {
      return acc + review.rating
    }, 0)
    // return average of ratings to 2 dp
    return (sumOfRatings / this.reviews.length).toFixed(2)
  })

// make sure data is returned as json
museumSchema.set('toJSON', { virtuals: true })

museumSchema.plugin(uniqueValidator)

export default mongoose.model('Museum', museumSchema)