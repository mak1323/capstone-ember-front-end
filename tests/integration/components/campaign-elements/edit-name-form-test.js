import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('campaign-elements/edit-name-form', 'Integration | Component | campaign elements/edit name form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{campaign-elements/edit-name-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#campaign-elements/edit-name-form}}
      template block text
    {{/campaign-elements/edit-name-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
