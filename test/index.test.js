import Joi from 'joi';
import JoiMsisdnExt from '../';
import { expect } from 'chai';

const JoiExtended = Joi.extend(JoiMsisdnExt);

describe('msisdn', () => {
    describe('.valid', () => {
        it('should accept valid msisdn and clean it', () => {
            ['+79060523777', '+7 906 052 37 77'].forEach(testCase => {
                expect(
                    JoiExtended.attempt(testCase, JoiExtended.msisdn().valid())
                ).to.eq('9060523777');
            });
        });

        it('should reject invalid msisdn', () => {
            expect(() => {
                JoiExtended.attempt('34234323', JoiExtended.msisdn().valid());
            }).to.throw(/"value" is required to be a valid msisdn/);
        });
    });
});
