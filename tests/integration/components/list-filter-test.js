import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';

moduleForComponent('list-filter', 'Integration | Component | list filter', {
  integration: true
});

const ITEMS = [{ city: 'San Francisco' }, { city: 'Portland' }, { city: 'Seattle' }];
const FILTERED_ITEMS = [{ city: 'San Francisco' }];

const filterByCity = (city) => {
  return city === '' ? Ember.RSVP.resolve(ITEMS) : Ember.RSVP.resolve(FILTERED_ITEMS);
};

test('should initially load all listings', function (assert) {
  // we want our actions to return promises, since they are potentially fetching data asynchronously
  this.on('filterByCity', filterByCity);

  // with an integration test, you can set up and use your component in the same way your application
  // will use it.
  this.render(hbs`
    {{#list-filter filter=(action 'filterByCity') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="city">{{item.city}}</li>
      {{/each}}
      </ul>
    {{/list-filter}}
  `);

  // the wait function will return a promise that will wait for all promises
  // and xhr requests to resolve before running the contents of the then block.
  return wait().then(() => {
    assert.equal(this.$('.city').length, 3);
  });
});

test('should update with matching listings', function (assert) {
  // we want our actions to return promises, since they are potentially fetching data asynchronously
  this.on('filterByCity', filterByCity);

  // with an integration test, you can set up and use your component in the same way your application
  // will use it.
  this.render(hbs`
    {{#list-filter filter=(action 'filterByCity') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="city">
          {{item.city}}
        </li>
      {{/each}}
      </ul>
    {{/list-filter}}
  `);

  // The keyup event here should invoke an action that will cause the list to be filtered
  this.$('.list-filter input').val('san').keyup();

  // the wait function will return a promise that will wait for all promises
  // and xhr requests to resolve before running the contents of the then block.
  return wait().then(() => {
    assert.equal(this.$('.city').length, 1);
    assert.equal(this.$('.city').text().trim(), 'San Francisco');
  });
});

test('should show the default data when filter is deleted', function (assert) {
  // we want our actions to return promises, since they are potentially fetching data asynchronously
  this.on('filterByCity', filterByCity);

  // with an integration test, you can set up and use your component in the same way your application
  // will use it.
  this.render(hbs`
    {{#list-filter filter=(action 'filterByCity') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="city">
          {{item.city}}
        </li>
      {{/each}}
      </ul>
    {{/list-filter}}
  `);

  // The keyup event here should invoke an action that will cause the list to be filtered
  this.$('.list-filter input').val('san').keyup();

  // Delete filter data
  this.$('.list-filter input').val('').keyup();

  // the wait function will return a promise that will wait for all promises
  // and xhr requests to resolve before running the contents of the then block.
  return wait().then(() => {
    assert.equal(this.$('.city').length, 3);
  });
});
