import { moduleName } from "../constants/moduleName";

export default ({ strapi }) => ({
  async find() {
    return strapi.entityService.findMany(moduleName);
  },

  async findOne(id: string) {
    return strapi.entityService.findOne(moduleName, id);
  },

  async create(data) {
    return strapi.entityService.create(moduleName, data);
  },

  async update(id: string, data) {
    return strapi.entityService.update(moduleName, id, data);
  },

  async delete(id: string) {
    return strapi.entityService.delete(moduleName, id);
  },
});
