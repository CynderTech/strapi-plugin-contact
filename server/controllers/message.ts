import sanitizeOutput from '../utils/sanitizeOutput';
import { moduleName } from '../constants/moduleName';

export default ({ strapi }) => ({
  async find(ctx) {
    try {
      const result = await strapi.service(moduleName).find(ctx.request.body);
      
      ctx.send(result);
    } catch (error) {
      strapi.log.error(`Error finding messages: ${error}`)
      
      ctx.badRequest(error);
    }
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    try {
      const entity = await strapi.service(moduleName).findOne(id);
      
      const result = await sanitizeOutput(entity, moduleName, strapi);
      ctx.send(result);
    } catch (error) {
      strapi.log.error(`Error finding message: ${error}`)
      
      ctx.badRequest(error);
    }
  },

  async create(ctx) {
    try {
      const entity = await strapi.service(moduleName).create(ctx.request.body);
      
      const result = await sanitizeOutput(entity, moduleName, strapi);
      ctx.send(result);
    } catch (error) {
      strapi.log.error(`Error creating message: ${error}`)
      
      ctx.badRequest(error);
    }
  },

  async update(ctx) {
    const { id } = ctx.params;
    try {
      const entity = await strapi.service(moduleName).update(id, ctx.request.body);
      
      const result = await sanitizeOutput(entity, moduleName, strapi);
      ctx.send(result);
    } catch (error) {
      strapi.log.error(`Error updating message: ${error}`)
      
      ctx.badRequest(error);
    }
  },

  async delete(ctx) {
    const { id } = ctx.params;
    try {
      const result = await strapi.service(moduleName).delete(id);
      
      ctx.send(result);
    } catch (error) {
      strapi.log.error(`Error deleting message: ${error}`)
      
      ctx.badRequest(error);
    }
  },
});
