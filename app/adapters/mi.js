import DS from 'ember-data';
import Tabletop from 'tabletop';

export default DS.JSONAPIAdapter.extend({
  urlForFindAll(modelName) {

    var url = "1mj5kpIlpcfuZ-J_iUxnCmXtj5p5TdSZBk3UzArizr6s"

    Tabletop.init({
      key: url,
      callback: showInfo,
      simpleSheet: true
    })

    function showInfo(data, Tabletop) {
      console.log(data);
      var emObject = []

      data.forEach(mi => {
        emObject.push({
          "id": 'temp'
          , "attributes" : mi
          , "type"  : "mi"
        })
      });

      console.dir(emObject)
      // return { "data" : emObject};
    }


    return 'data.json';
  }
});
