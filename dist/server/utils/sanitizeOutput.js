"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@strapi/utils");
const { contentAPI } = utils_1.sanitize;
// biome-ignore lint/suspicious/noExplicitAny: assigned any so strapi is not installed
const sanitizeOutput = (data, model, strapi, auth) => {
    const schema = strapi.getModel(model);
    return contentAPI.output(data, schema, { auth });
};
exports.default = sanitizeOutput;
