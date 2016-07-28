import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('should toogle wide class on click', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let stubRental = Ember.Object.create({
    title: 'test-title',
    owner: 'test-owner',
    type: 'test-type',
    city: 'test-city',
    bedroom: 3,
    image: 'fake.png'
  });
  this.set('rentalObj', stubRental);

  this.render(hbs`{{rental-listing rental=rentalObj}}`);

  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');

  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');

  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});
