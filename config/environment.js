/* jshint node: true */

const rentals = [{
  id: 1,
  title: 'Grand Old Mansion',
  owner: 'Veruca Salt',
  city: 'San Francisco',
  type: 'Estate',
  bedrooms: 15,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
    id: 2,
    title: 'Urban Living',
    owner: 'Mike TV',
    city: 'Seattle',
    type: 'Condo',
    bedrooms: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
  }, {
    id: 3,
    title: 'Downtown Charm',
    owner: 'Violet Beauregarde',
    city: 'Portland',
    type: 'Apartment',
    bedrooms: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
  }];

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'super-rentals',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.RENTALS_DATA = rentals;
  }

  return ENV;
};
