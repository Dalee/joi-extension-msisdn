'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _msisdnFormatter = require('msisdn-formatter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extension name
 *
 * @type {string}
 */
var EXTENSION = 'msisdn';

/**
 * Joi extension object
 *
 * @type {object}
 */
exports.default = {
    base: _joi2.default.string(),
    name: EXTENSION,
    language: {
        valid: 'is required to be a valid msisdn'
    },
    pre: function pre(value, state, options) {
        return options.convert ? (0, _msisdnFormatter.clean)(value, true) : value;
    },

    rules: [{
        name: 'valid',
        validate: function validate(params, value, state, options) {
            var msisdn = (0, _msisdnFormatter.clean)(value, true);
            if (!msisdn || msisdn.length !== 10) {
                return this.createError(EXTENSION + '.valid', { v: value }, state, options);
            }
            return value;
        }
    }]
};