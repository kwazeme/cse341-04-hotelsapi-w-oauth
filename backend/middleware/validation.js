const { check } = require('express-validator');
 
exports.catalogueValidation = [
    check('imageurl', 'imageurl is requied').not().isEmpty().isString(),

    check('hotel', 'hotel is requied').not().isEmpty().isString(),

    check('rating', 'rating is requied').not().isEmpty().isString(),

    check('phone', 'phone is requied').not().isEmpty().isString(),

    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),

    check('website', 'website is requied').not().isEmpty().isString(),
    
    check('book_now', 'book_now is requied').not().isEmpty().isString()
]
 