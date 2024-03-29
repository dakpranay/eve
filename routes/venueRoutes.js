const express=require('express')
const venueController=require('../controller/venueController')
const venueImageController=require('../controller/venueImageController')
const authController=require('../controller/authController')

const router=express.Router()


//need to add autication
router.get('/',venueController.getAllVenues)
router.post('/cv',venueController.createVenue)


router
    .route('/:id')
    .get(venueController.getOneVenue)
    .delete(venueController.deleteOneVenue)
    .patch(venueController.updateOneVenue)

router
    .route('/:venueId/i')
    .post(venueImageController.postImage)
    .get(venueImageController.getAllVenueImages)
    
module.exports=router
