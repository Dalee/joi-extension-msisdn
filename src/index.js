'use strict';

const Joi = require('joi');
const clean = require('msisdn-formatter').clean;

/**
 * Extension name
 *
 * @type {string}
 */
const EXTENSION = 'msisdn';

/**
 * Joi extension object
 *
 * @type {object}
 */
module.exports = {
    base: Joi.string(),
    name: EXTENSION,
    language: {
        valid: 'is required to be a valid msisdn'
    },
    pre(value, state, options) {
        return options.convert? clean(value, true): value;
    },
    rules: [{
        name: 'valid',
        validate(params, value, state, options) {
            const msisdn = clean(value, true);
            if (!msisdn || msisdn.length !== 10) {
                return this.createError(`${EXTENSION}.valid`, {v: value}, state, options);
            }
            return value;
        }
    }]
};
