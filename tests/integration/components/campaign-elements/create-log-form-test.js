import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('campaign-elements/create-log-form', 'Integration | Component | campaign elements/create log form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{campaign-elements/create-log-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#campaign-elements/create-log-form}}
      template block text
    {{/campaign-elements/create-log-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
