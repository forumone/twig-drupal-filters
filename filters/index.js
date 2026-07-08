const trans = require('./trans');

module.exports = {
  t: trans,
  trans,
  placeholder: trans,
  without: require('./without'),
  clean_class: require('./clean_class'),
  clean_id: require('./clean_id'),
  render: trans,
  format_date: trans,
  drupal_escape: require('./drupal_escape'),
  safe_join: require('./safe_join'),
};
