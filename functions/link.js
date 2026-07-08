module.exports = function (title, url, attributes) {
  const finalAttributesObject = attributes || {};
  let finalAttributes = '';

  // Loop through all the given attributes.
  for (const attribute in finalAttributesObject) {
    if (
      Object.prototype.hasOwnProperty.call(finalAttributesObject, attribute) &&
      finalAttributesObject[attribute] &&
      attribute !== '_keys'
    ) {
      // Support arrays in the attributes list (e.g., class), or the object's toString().
      finalAttributes +=
        ' ' +
        attribute +
        '="' +
        (Array.isArray(finalAttributesObject[attribute])
          ? finalAttributesObject[attribute].join(' ')
          : finalAttributesObject[attribute]) +
        '"';
    }
  }

  // Construct the link.
  return '<a href="' + url + '"' + finalAttributes + '>' + title + '</a>';
};
