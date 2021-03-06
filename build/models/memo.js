'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Memo = new Schema({
    writer: String,
    contents: String,
    starred: [String],
    comments: [{
        author: String,
        content: String,
        date: { type: Date, default: Date.now },
        deleted: { type: Boolean, default: false }
    }],
    date: {
        created: { type: Date, default: Date.now },
        edited: { type: Date, default: Date.now }
    },
    is_edited: { type: Boolean, default: false }
}, {
    usePushEach: true
});

exports.default = _mongoose2.default.model('memo', Memo);