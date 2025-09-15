"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sanitizeOutput_1 = __importDefault(require("../utils/sanitizeOutput"));
const moduleName_1 = require("../constants/moduleName");
exports.default = ({ strapi }) => ({
    async find(ctx) {
        try {
            const result = await strapi.service(moduleName_1.moduleName).find(ctx.request.body);
            ctx.send(result);
        }
        catch (error) {
            strapi.log.error(`Error finding messages: ${error}`);
            ctx.badRequest(error);
        }
    },
    async findOne(ctx) {
        const { id } = ctx.params;
        try {
            const entity = await strapi.service(moduleName_1.moduleName).findOne(id);
            const result = await (0, sanitizeOutput_1.default)(entity, moduleName_1.moduleName, strapi);
            ctx.send(result);
        }
        catch (error) {
            strapi.log.error(`Error finding message: ${error}`);
            ctx.badRequest(error);
        }
    },
    async create(ctx) {
        try {
            const entity = await strapi.service(moduleName_1.moduleName).create(ctx.request.body);
            const result = await (0, sanitizeOutput_1.default)(entity, moduleName_1.moduleName, strapi);
            ctx.send(result);
        }
        catch (error) {
            strapi.log.error(`Error creating message: ${error}`);
            ctx.badRequest(error);
        }
    },
    async update(ctx) {
        const { id } = ctx.params;
        try {
            const entity = await strapi.service(moduleName_1.moduleName).update(id, ctx.request.body);
            const result = await (0, sanitizeOutput_1.default)(entity, moduleName_1.moduleName, strapi);
            ctx.send(result);
        }
        catch (error) {
            strapi.log.error(`Error updating message: ${error}`);
            ctx.badRequest(error);
        }
    },
    async delete(ctx) {
        const { id } = ctx.params;
        try {
            const result = await strapi.service(moduleName_1.moduleName).delete(id);
            ctx.send(result);
        }
        catch (error) {
            strapi.log.error(`Error deleting message: ${error}`);
            ctx.badRequest(error);
        }
    },
});
