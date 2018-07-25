
//Shuffle Array
var shuffle_array = function(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

/**
 * Array.prototype.[method name] allows you to define/overwrite an objects method
 * needle is the item you are searching for
 * this is a special variable that refers to "this" instance of an Array.
 * returns true if needle is in the array, and false otherwise
 */
Array.prototype.contains = function ( needle ) {
  for(i in this){
    if(this[i] == needle) return true
  }
  return false;
}

var add_css = function(css,id){
  var head = window.document.head || window.document.getElementsByTagName('head')[0],
  style = window.document.createElement('style');

  style.type = 'text/css';
  
  // Assign the id so we can remove this style if we need to.
  if( id ){ style.id = id; }

  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(window.document.createTextNode(css));
  }

  head.appendChild(style);
};

var stringToBoolean = function(string){
  switch(string.toLowerCase()){
    case "true": case "yes": case "1": return true;
    case "false": case "no": case "0": case null: return false;
    default: return Boolean(string);
  }
};

// replace <svg name='name'></svg> with the actual svg
var replace_svgs = function(){
  $('svg[name]').each(function(){
    name = $(this).attr('name');
    classes = $(this).attr('class');
    $(this).before(svgs[name]);
    $(this).prev('svg').attr('class',classes);
    $(this).remove();
  });
}

var chain_clicks = function(){
  // Chain clicks between elements
  $('[click-element]').click(function(){
    click_element_id = $(this).attr('click-element');
    $('#'+click_element_id).click();
  });
}

var copy_file = function(source, target, cb) {
  var cbCalled = false;
  var rd = fs.createReadStream(source);

  rd.on("error", function(err) {
    done(err);
  });

  var wr = fs.createWriteStream(target);
  
  wr.on("error", function(err) {
    done(err);
  });

  wr.on("close", function(ex) {
    done();
  });

  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

function setStyles( element, stylesObject ){
 for (var property in stylesObject)
    element.style[property] = stylesObject[property]
}



// for each on array:

// array_name.forEach(function( item ){ ... });

// for each on object

// $.each(object, function(index, value) {
//     console.log(value);
// }); 



function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// add leading zeroes
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}