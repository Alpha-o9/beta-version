const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    imageFilename: {
      type: String,
      default: "listingimage"
    },
    image: {
      url: {
        type: String,
      },
    },
    location: String,
    country: String,
    reviews: [ {
      type: Schema.Types.ObjectId,
      ref: "Review",

    },
      
    ],
  });

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;