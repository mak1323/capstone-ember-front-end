import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('campaign-elements/create-campaign', 'Integration | Component | campaign elements/create campaign', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{campaign-elements/create-campaign}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#campaign-elements/create-campaign}}
      template block text
    {{/campaign-elements/create-campaign}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
