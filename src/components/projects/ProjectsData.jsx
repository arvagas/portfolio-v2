// image imports
import spacemudPhoto from '../../assets/projects/spacemud.png'
import spacemudPhotoThumb from '../../assets/projects/spacemudThumb.jpg'
import appraiserbffPhoto from '../../assets/projects/appraiserbff.png'
import appraiserbffPhotoThumb from '../../assets/projects/appraiserbffThumb.jpg'
import betterbusinessPhoto from '../../assets/projects/betterbusiness.png'
import betterbusinessPhotoThumb from '../../assets/projects/betterbusinessThumb.jpg'
import airlyticsPhoto from '../../assets/projects/airlytics.png'
import airlyticsPhotoThumb from '../../assets/projects/airlyticsThumb.jpg'
import immunizationtrackerPhoto from '../../assets/projects/immunizationtracker.png'
import immunizationtrackerThumb from '../../assets/projects/immunizationtrackerThumb.jpg'

export const ProjectsData = [
  // {
  //   title: '',
  //   tag: "",
  //   desc: "",
  //   deploy: '',
  //   github: '',
  //   mockup: '',
  //   tech: [
  //     '',
  //     '',
  //     ''
  //   ],
  //   photo: '',
  //   photoAlt: 'Landing page of ',
  //   thumb: '',
  //   thumbAlt: 'Blurred thumbnail of ',
  //   gif: '',
  //   gifAlt: 'Brief demo of ',
  // },
  {
    title: 'Space MUD',
    tag: "A randomly generated multi-user dungeon experience set in an abandoned spacecraft.",
    desc: "A one week project built by myself and four other developers. The Django framework was utilized to generate and serve a map, as well as provide additional endpoints for player interaction within the game.",
    deploy: 'https://vibrant-noyce-dc1ddd.netlify.com/',
    github: 'https://github.com/CSBeastMode',
    mockup: '',
    tech: [
      'React',
      'Terminal-in-React',
      'Styled-Components',
      'Python',
      'Django',
      'Pusher'
    ],
    photo: spacemudPhoto,
    photoAlt: 'Landing page of Space MUD',
    thumb: spacemudPhotoThumb,
    thumbAlt: 'Blurred thumbnail of Space MUD',
    gif: spacemudPhoto,
    gifAlt: 'Brief demo of Space MUD',
  },
  {
    title: 'Appraiser BFF',
    tag: "Web app designed to assist in the valuation of a homeowner's property.",
    desc: "The goal of this project was to provide an estimated valuation of a homeowner's property determined by select features, with calculations based on existing aggregated data. As the backend developer, I created a RESTful API that handled user registration and login, property listings, as well as retrieved the calculated price that is returned from the data science model.",
    deploy: 'http://www.appraiserbff.xyz/',
    github: 'https://github.com/bw-appraisers-bff',
    mockup: '',
    tech: [
      'React',
      'React-Redux',
      'Node',
      'Express',
      'Bcrypt.js',
      'JSON Web Token',
      'Knex.js',
      'Supertest',
    ],
    photo: appraiserbffPhoto,
    photoAlt: 'Landing page of Appraiser BFF',
    thumb: appraiserbffPhotoThumb,
    thumbAlt: 'Blurred thumbnail of Appraiser BFF',
    gif: appraiserbffPhoto,
    gifAlt: 'Brief demo of Appraiser BFF',
  },
  {
    title: 'Better Business',
    tag: "Increase the review rating of a business by focusing on the negative.",
    desc: "Better Business aims to increase the review ratings of an establishment by focusing on key words in a Yelp or Google Review. A thorough parse of each review will yield common words or phrases that appear on other write-ups, thus allowing an owner to concentrate on what needs to be fixed and ignore fixing what already works.",
    deploy: 'https://better-business.netlify.com/',
    github: 'https://github.com/Business-Recommendation',
    mockup: '',
    tech: [
      'React',
      'React-Redux',
      'Formik',
      'Styled-Components',
    ],
    photo: betterbusinessPhoto,
    photoAlt: 'Landing page of Better Business',
    thumb: betterbusinessPhotoThumb,
    thumbAlt: 'Blurred thumbnail of Better Business',
    gif: betterbusinessPhoto,
    gifAlt: 'Brief demo of Better Business',
  },
  {
    title: 'Airlytics',
    tag: "Get optimal rates for your AirBnB listings.",
    desc: "This project aimed to calculate the best possible rate a host should list for a property for AirBnB usage. Based on properties that a house or apartment may or may not have, an algorithm devised on data from hundreds of AirBnB listings will output a recommended price range to use for maximum profit.",
    deploy: 'https://airlytics.netlify.com/',
    github: 'https://github.com/airbnb-price-opt',
    mockup: '',
    tech: [
      'React',
      'React-Redux',
      'Formik',
      'Styled-Components',
    ],
    photo: airlyticsPhoto,
    photoAlt: 'Landing page of Airlytics',
    thumb: airlyticsPhotoThumb,
    thumbAlt: 'Blurred thumbnail of Airlytics',
    gif: airlyticsPhoto,
    gifAlt: 'Brief demo of Airlytics',
  },
  {
    title: 'Immunization Tracker',
    tag: "",
    desc: "Immunization Tracker is designed to allow parents to keep thier children's immunization records in the cloud. Doctors, when given permission, have the ability to edit those records to always keep the information up to date.",
    deploy: 'https://immunization-tracker.netlify.com/',
    github: 'https://github.com/immunization-tracker',
    mockup: 'https://designer.gravit.io/?token=9MdZAdiV5YcYD2dddEWD_JPy0gE9Rk-9',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery'
    ],
    photo: immunizationtrackerPhoto,
    photoAlt: 'Landing page of Immunization Tracker',
    thumb: immunizationtrackerThumb,
    thumbAlt: 'Blurred thumbnail of Immunization Tracker',
    gif: immunizationtrackerPhoto,
    gifAlt: 'Brief demo of Immunization Tracker',
  },
]