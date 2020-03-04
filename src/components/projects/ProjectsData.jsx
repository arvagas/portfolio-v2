// image imports
import treasurehuntPhoto from '../../assets/projects/treasurehunt.png'
import treasurehuntThumb from '../../assets/projects/treasurehuntThumb.jpg'
import spacemudPhoto from '../../assets/projects/spacemud.png'
import spacemudThumb from '../../assets/projects/spacemudThumb.jpg'
import projectfireflyPhoto from '../../assets/projects/projectfirefly.png'
import projectfireflyThumb from '../../assets/projects/projectfireflyThumb.jpg'
import appraiserbffPhoto from '../../assets/projects/appraiserbff.png'
import appraiserbffThumb from '../../assets/projects/appraiserbffThumb.jpg'
import betterbusinessPhoto from '../../assets/projects/betterbusiness.png'
import betterbusinessThumb from '../../assets/projects/betterbusinessThumb.jpg'
import airlyticsPhoto from '../../assets/projects/airlytics.png'
import airlyticsThumb from '../../assets/projects/airlyticsThumb.jpg'
import immunizationtrackerPhoto from '../../assets/projects/immunizationtracker.png'
import immunizationtrackerThumb from '../../assets/projects/immunizationtrackerThumb.jpg'

export const ProjectsData = [
  {
    title: 'Treasure Hunt',
    desc: "A game designed as a competitive race to gather the most amount of artifacts and gold in a set time. Users can explore the map and interact with others, but the primary objective is to collect the most artifacts/gold to reach the top of the leaderboards.",
    resp: [
      'Created an algorithm to traverse an unknown map and stored room information accordingly.',
      'Optimized player movement to reduce unnecessary actions and avoid cooldown penalties.',
      'Multiple scripts created to allow player to automate tasks within the world.'
    ],
    deploy: '',
    github: 'https://github.com/Team-Nowhere',
    mockup: '',
    tech: [
      'Python',
    ],
    photo: treasurehuntPhoto,
    photoAlt: 'Landing page of Treasure Hunt',
    thumb: treasurehuntThumb,
    thumbAlt: 'Blurred thumbnail of Treasure Hunt',
    gif: '',
    gifAlt: 'Brief demo of Treasure Hunt',
  },
  {
    title: 'Space MUD',
    desc: "A one-week project, Space MUD is a randomly generated multi-user dungeon experience set in an abandoned spacecraft.",
    resp: [
      'Set up the REST API in Django, allowing the React front end to communicate with the back end to deliver information seamlessly.',
      'Collaborated on creating an algorithm to generate a random map.',
      'Integrated Pusher into the back and front end to allow users to effortlessly communicate with one another in real time.',
    ],
    deploy: 'https://vibrant-noyce-dc1ddd.netlify.com/',
    github: 'https://github.com/CSBeastMode',
    mockup: '',
    tech: [
      'React',
      'Terminal-in-React',
      'Styled-Components',
      'Python',
      'Django',
      'Pusher',
    ],
    photo: spacemudPhoto,
    photoAlt: 'Landing page of Space MUD',
    thumb: spacemudThumb,
    thumbAlt: 'Blurred thumbnail of Space MUD',
    gif: '',
    gifAlt: 'Brief demo of Space MUD',
  },
  {
    title: 'Project Firefly',
    desc: "The goal of Project Firefly is to introduce coding/programming concepts to young children via interesting visuals and effortless controls.",
    resp: [
      'Integrated Google and Facebook login via Firebase.',
      'Separated user onboarding from the game application to better streamline the flow of data.',
      'Integrated Stripe and Zendesk into the app to get it business ready.',
      'Created custom forum to foster a community around the game.'
    ],
    deploy: 'https://lambda-school-labs.github.io/project-firefly-site/',
    github: 'https://github.com/Lambda-School-Labs/project-firefly-site',
    mockup: '',
    tech: [
      'React',
      'Stripe',
      'Zendesk',
      'Firebase',
      'MongoDB',
    ],
    photo: projectfireflyPhoto,
    photoAlt: 'Landing page of Project Firefly',
    thumb: projectfireflyThumb,
    thumbAlt: 'Blurred thumbnail of Project Firefly',
    gif: '',
    gifAlt: 'Brief demo of Project Firefly',
  },
  {
    title: 'Appraiser BFF',
    desc: "The goal of this project was to provide an estimated valuation of a homeowner's property determined by select features, with calculations based on existing aggregated data.",
    resp: [
      'Built the back end to handle user registration, profiles, and property listings.',
      'Decided on JSON Web Token for managing restricted routes.',
      'Handled the retrieval and storage of data calculated via the data science algorithm.',
    ],
    deploy: 'http://www.appraiserbff.xyz/',
    github: 'https://github.com/bw-appraisers-bff',
    mockup: '',
    tech: [
      'Node',
      'Express',
      'Bcrypt.js',
      'JSON Web Token',
      'Knex.js',
      'Supertest',
    ],
    photo: appraiserbffPhoto,
    photoAlt: 'Landing page of Appraiser BFF',
    thumb: appraiserbffThumb,
    thumbAlt: 'Blurred thumbnail of Appraiser BFF',
    gif: '',
    gifAlt: 'Brief demo of Appraiser BFF',
  },
  {
    title: 'Better Business',
    desc: "Better Business aims to increase the review ratings of an establishment by focusing on key words in a Yelp or Google Review. A thorough parse of each review will yield common words or phrases that appear on other write-ups, thus allowing an owner to concentrate on what needs to be fixed and ignore fixing what already works.",
    resp: [
      'Created the landing page and its animations to intrigue potential users.',
      'Set up the web page routing to different pages.',
      'Assisted with setting up Formik forms and sending the inputted data to the database.',
    ],
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
    thumb: betterbusinessThumb,
    thumbAlt: 'Blurred thumbnail of Better Business',
    gif: '',
    gifAlt: 'Brief demo of Better Business',
  },
  {
    title: 'Airlytics',
    desc: "This project aimed to calculate the best possible rate a host should list for a property for AirBnB usage. Based on properties that a house or apartment may or may not have, an algorithm devised on data from hundreds of AirBnB listings will output a recommended price range to use for maximum profit.",
    resp: [
      'Built the cards used to view available listings from scratch.',
      'Customized the modals that each property listing would bring up.',
      'Assisted with creating the forms used to send information to the back end.',
    ],
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
    thumb: airlyticsThumb,
    thumbAlt: 'Blurred thumbnail of Airlytics',
    gif: '',
    gifAlt: 'Brief demo of Airlytics',
  },
  {
    title: 'Immunization Tracker',
    desc: "Immunization Tracker is designed to allow parents to keep their children's immunization records on the web. Physicians, when given permission, have the ability to edit those records after each doctor's appointment to always keep the information up to date.",
    resp: [
      'Designed the template of how the marketing page would look like.',
      'Took part in a collaborative effort to create the landing page.',
      'Built and populated the help page with possible frequently asked questions.',
    ],
    deploy: 'https://immunization-tracker.netlify.com/',
    github: 'https://github.com/immunization-tracker',
    mockup: 'https://designer.gravit.io/?token=9MdZAdiV5YcYD2dddEWD_JPy0gE9Rk-9',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
    ],
    photo: immunizationtrackerPhoto,
    photoAlt: 'Landing page of Immunization Tracker',
    thumb: immunizationtrackerThumb,
    thumbAlt: 'Blurred thumbnail of Immunization Tracker',
    gif: '',
    gifAlt: 'Brief demo of Immunization Tracker',
  },
]