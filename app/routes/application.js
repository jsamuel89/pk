import Route from '@ember/routing/route';
import groupBy from 'ember-group-by';

import Tabletop from 'tabletop';

export default Route.extend({
  model() {


    var thisObj = this;
    this.menuitems =  Ember.Object.extend({
      all : Ember.computed(function () {
        return thisObj.store.peekAll('mi');
      })
      
      , bycategory : groupBy('all','category')
    }).create();


    return this.store.findAll('mi').then((menuitems)=>{

      console.dir(this.menuitems.get('bycategory'))
      return Ember.RSVP.hash({
        menuitems : this.menuitems 
        , address : null
      })
      
    });
  }
});
