/* eslint-disable no-underscore-dangle */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

const pluginId = require('../admin/src/pluginId');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	/**
	 * Retrieve records.
	 *
	 * @return {Array}
	 */

	async find(ctx) {
		let entities;
		if (ctx.query._q) {
			entities = await strapi.plugins[pluginId].services.message.search(
				ctx.query,
			);
		} else {
			entities = await strapi.plugins[pluginId].services.message.find(
				ctx.query,
			);
		}

		return entities.map((entity) =>
			sanitizeEntity(entity, {
				model: strapi.plugins[pluginId].models.message,
			}),
		);
	},

	/**
	 * Retrieve a record.
	 *
	 * @return {Object}
	 */

	async findOne(ctx) {
		const { id } = ctx.params;

		const entity = await strapi.plugins[pluginId].services.message.findOne({
			id,
		});
		return sanitizeEntity(entity, {
			model: strapi.plugins[pluginId].models.message,
		});
	},

	/**
	 * Count records.
	 *
	 * @return {Number}
	 */

	count(ctx) {
		if (ctx.query._q) {
			return strapi.plugins[pluginId].services.message.countSearch(
				ctx.query,
			);
		}
		return strapi.plugins[pluginId].services.message.count(ctx.query);
	},

	/**
	 * Create a record.
	 *
	 * @return {Object}
	 */

	async create(ctx) {
		let entity;
		if (ctx.is('multipart')) {
			const { data, files } = parseMultipartData(ctx);
			entity = await strapi.plugins[pluginId].services.message.create(
				data,
				{
					files,
				},
			);
		} else {
			entity = await strapi.plugins[pluginId].services.message.create(
				ctx.request.body,
			);
		}
		return sanitizeEntity(entity, {
			model: strapi.plugins[pluginId].models.message,
		});
	},

	/**
	 * Update a record.
	 *
	 * @return {Object}
	 */

	async update(ctx) {
		const { id } = ctx.params;

		let entity;
		if (ctx.is('multipart')) {
			const { data, files } = parseMultipartData(ctx);
			entity = await strapi.plugins[pluginId].services.message.update(
				{ id },
				data,
				{
					files,
				},
			);
		} else {
			entity = await strapi.plugins[pluginId].services.message.update(
				{ id },
				ctx.request.body,
			);
		}

		return sanitizeEntity(entity, {
			model: strapi.plugins[pluginId].models.message,
		});
	},

	/**
	 * Delete a record.
	 *
	 * @return {Object}
	 */

	async delete(ctx) {
		const { id } = ctx.params;

		const entity = await strapi.plugins[pluginId].services.message.delete({
			id,
		});
		return sanitizeEntity(entity, {
			model: strapi.plugins[pluginId].models.message,
		});
	},
};
