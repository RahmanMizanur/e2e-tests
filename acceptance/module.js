'use strict';
/* eslint-disable camelcase */
const Helper = codecept_helper;
/* eslint-enable camelcase */

const config = require('config').tests.acceptance;
const request = require('request-promise-native');
const moment = require('moment');

const Imap = require('imap'),
    inspect = require('util').inspect;

class MyHelper extends Helper {
}

module.exports = MyHelper;
