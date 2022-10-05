# You get to choose what this project is

- Southern Suns Hotels Catalogue and Booking information

# Database should store at least two collections

- Database: cse341-ssc
- Collections
  - hotel catalogue
  - user reservations

# At least one collection should store documents that have 7 fields or more

- User reservations collection will container

  - firstname
  - lastname
  - hotel_info
  - check_in_date
  - check_out_date
  - number_adults
  - number_children
  - payment_method

  - Locations catalogue fields
    - imageurl (url) ex: https://drsprnoe9nnhf.cloudfront.net/southernsun-04222022/cms/cache/v2/561cf6f679884.jpg/700x700/fit/80/f22e8905009108e1e3a390a32ab0f424.jpg
    - hotel ex: Southern Sun Montecasino
    - rating (tripAdvisor) ex: **\***
    - description ex: Easily accessible from Johannesburg’s N1 freeway, this hotel is located within the popular gaming and entertainment Montecasino precinct and close to Fourways Mall. With seventeen upmarket conferencing and banqueting venues, a number of restaurants (including the popular Mediterranean-style Punchinello’s) and an outdoor pool area to relax in, it’s ideal for business and leisure travellers.
    - phone ex: +27 11 367 4367
    - email: ex: ssmontecasino.reservations@southernsun.com
    - website (url) ex: https://www.southernsun.com/southern-sun-montecasino
    - book_now (link to /reservations/)

Node project successfully connects to MongoDB
API routes perform GET, POST, PUT, DELETE requests that are fully functional
All routes should include data validation and error handling
Project must incorporate use of OAuth for user management.
API Documentation is professional, comprehensive, relevant, and accurate
API is published to Render and can be called from external sources
