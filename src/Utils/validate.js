import _ from "lodash";
/* eslint-disable */
function required(val) {
  if (val) return !!val.toString().trim();
  return false;
}

function imageValidate(file) {
  if (!file) return true;
  var t = file.type.split("/").pop().toLowerCase();
  if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
    return false;
  }
  return true;
}
function isInvalid(validation) {
  let errors = {};
  _.forEach(validation, (rules, field) => {
    _.forEach(rules, (val) => {
      if (!val && !errors[`${field}`]) errors[`${field}`] = true;
    });
  });
  return !_.isEmpty(errors);
}
function checkValidate(validation) {
  if (isInvalid(validation)) {
    return false;
  }
  return true;
}

export { required, imageValidate, isInvalid, checkValidate };
