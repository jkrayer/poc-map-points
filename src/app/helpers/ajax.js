'use strict';

import $ from 'jquery';

module.exports = {
  get: function (url) {
    return new Promise(
      function (success, error) {
        $.ajax({
          url: url,
          dataType: 'json',
          success: success,
          error: error
        });
      }
    );
  },
  post: function (url, data, callback) {
    return new Promise(
      function (success, error) {
        $.ajax({
          url: url,
          type: 'POST',
          data: data,
          success: success,
          error: error
        });
      }
    ).then(function(data) {
      callback(data);
    });
  },
  patch: function (url, data) {
    return new Promise(
      function (success, error) {
        $.ajax({
          url: url,
          type: 'PATCH',
          data: data,
          success: success,
          error: error
        });
      }
    );
  },
  del: function (url) {
    return new Promise(
      function (success, error) {
        $.ajax({
          url: url,
          type: 'DELETE',
          success: success,
          error: error
        });
      }
    );
  }
};
