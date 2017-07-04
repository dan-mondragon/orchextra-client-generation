var setQueryString = (query) => {
  var queryString = "";
  // console.log(query);
  if(typeof query !== 'undefined'){
    if(typeof query._with !== 'undefined'){
      queryString += "with=";
      query._with.forEach(w => {
        queryString += `${w},`
      });
    }

    if(typeof query.fields !== 'undefined'){
      queryString += "&fields=";
      query.fields.forEach(field => {
        queryString += `${field},`
      });
    }

    if(typeof query.filter !== 'undefined'){
      queryString += "&";
      for(var name in query.filter){
        var value = query.filter[name];
        queryString += `${name}=${value}&`
      }
    }

    if(typeof query.page !== 'undefined'){
      queryString += `&page=${query.page}`;
    }
    if(typeof query.perPage !== 'undefined'){
      queryString += `&perPage=${query.perPage}`;
    }
  }
  console.log(queryString);
  return queryString;
};

module.exports = {
  setQueryString
};
