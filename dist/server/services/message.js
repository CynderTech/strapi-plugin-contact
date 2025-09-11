"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moduleName = 'plugin::contact.message';
exports.default = ({ strapi }) => ({
    async find() {
        return strapi.entityService.findMany(moduleName);
    },
    async findOne(id) {
        return strapi.entityService.findOne(moduleName, id);
    },
    async create(data) {
        return strapi.entityService.create(moduleName, data);
    },
    async update(id, data) {
        return strapi.entityService.update(moduleName, id, data);
    },
    async delete(id) {
        return strapi.entityService.delete(moduleName, id);
    },
});
