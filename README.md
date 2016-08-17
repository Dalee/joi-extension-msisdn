# joi-extension-msisdn

[![Build Status](https://travis-ci.org/Dalee/joi-extension-msisdn.svg?branch=master)](https://travis-ci.org/Dalee/joi-extension-msisdn)

Joi extension to validate russian msisdns.

## Install

```
$ npm install joi-extension-msisdn
```

## Usage

Extension has only `valid` rule for `msisdn`.

```js
import Joi from 'joi';
import JoiMsisdnExt from 'joi-extension-msisdn';

Joi.attempt('9060523777', Joi.extend(JoiMsisdnExt).msisdn().valid());
```

You can also use it with HapiJS as a route validator:

```js
import Joi from 'joi';
import JoiMsisdnExt from 'joi-extension-msisdn';

// ...

export default [
    {
        method: 'GET',
        path: '/info',
        handler: info,
        config: {
            validate: {
                query: Joi.object({
                    msisdn: Joi.extend(JoiMsisdnExt).msisdn().valid()
                })
            },
            description: 'Do something that requires valid msisdn',
            tags: ['api']
        }
    }
];

// ...
```
