const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapasync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middelware.js");

const reviewController = require("../controllers/reviews.js");

//reviews
//post  review route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapasync(reviewController.createReview)
);

//delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapasync(reviewController.deleteReview)
);

module.exports = router;
