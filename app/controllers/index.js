import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCity(city) {
      return city !== '' ?
        this.get('store').query('rental', { city: city })
        : this.get('store').findAll('rental');
    }
  }
});
