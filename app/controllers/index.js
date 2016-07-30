import Ember from 'ember';
import ENV from 'super-rentals/config/environment';

export default Ember.Controller.extend({
  actions: {
    filterByCity(city) {
      if (ENV.APP.RENTALS_DATA) {
        return Ember.RSVP.resolve(city !== '' ?
          ENV.APP.RENTALS_DATA.filter(rental =>
            rental.city.toLowerCase().indexOf(city.toLowerCase()) !== -1)
          : ENV.APP.RENTALS_DATA);
      }

      return city !== '' ?
        this.get('store').query('rental', { city: city })
        : this.get('store').findAll('rental');
    }
  }
});
