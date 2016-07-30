import Ember from 'ember';

export default Ember.Component.extend({
  maps: Ember.inject.service(),

  didInsertElement() {
    this._super(...arguments);

    const location = this.get('location');
    const mapElement = this.get('maps').getMapElement(location);

    this.$('.map-container').append(mapElement);
  }
});
