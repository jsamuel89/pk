import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr()
  , category : DS.attr()
  , description : DS.attr()
  , pricetype : DS.attr()
  , price : DS.attr()
  , regular : DS.attr()
  , medium : DS.attr()
  , large : DS.attr()
  , isspicy : DS.attr()
  , isveg : DS.attr()
  
  , diettype : Ember.computed('isveg',function(){
    if(this.get('isveg')) return 'vegetarian'
    else return 'non-vegetarian'
  })
});
