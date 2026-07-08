/**
 * Adds all the filters to the given Twig intstance.
 *
 * @param {Twig} twigInstance The instance of Twig to modify.
 */
module.exports = function (twigInstance) {
  const filters = require('./filters');
  for (const filterName in filters) {
    if (filters[filterName]) {
      const filter = filters[filterName];
      twigInstance.extendFilter(filterName, filter);
    }
  }

  const functions = require('./functions');
  for (const functionName in functions) {
    if (functions[functionName]) {
      const func = functions[functionName];
      twigInstance.extendFunction(functionName, func);
    }
  }
};
