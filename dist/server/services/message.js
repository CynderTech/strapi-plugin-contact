"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moduleName_1 = require("../constants/moduleName");
exports.default = ({ strapi }) => ({
    async find() {
        return strapi.entityService.findMany(moduleName_1.moduleName);
    },
    async findOne(id) {
        return strapi.entityService.findOne(moduleName_1.moduleName, id);
    },
    async create(data) {
        return strapi.entityService.create(moduleName_1.moduleName, data);
    },
    async update(id, data) {
        return strapi.entityService.update(moduleName_1.moduleName, id, data);
    },
    async delete(id) {
        return strapi.entityService.delete(moduleName_1.moduleName, id);
    },
});
