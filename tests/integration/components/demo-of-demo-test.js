import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('demo-of-demo', 'Integration | Component | demo of demo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{demo-of-demo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#demo-of-demo}}
      template block text
    {{/demo-of-demo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
