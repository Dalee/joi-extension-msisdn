const Joi = require('joi').extend(require('../'));
const expect = require('chai').expect;

describe('msisdn', () => {
    describe('.valid', () => {
        it('should accept valid msisdn and clean it', () => {
            ['+79060523777', '+7 906 052 37 77'].forEach(testCase => {
                expect(Joi.attempt(testCase, Joi.msisdn().valid())).to.eq('9060523777');
            });
        });

        it('should reject invalid msisdn', () => {
            expect(() => {
                Joi.attempt('34234323', Joi.msisdn().valid());
            }).to.throw(/"value" is required to be a valid msisdn/);
        });
    });
});
