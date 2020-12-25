const pluginId = require('../admin/src/pluginId');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
	/**
	 * Promise to fetch all records
	 *
	 * @return {Promise}
	 */
	find(params, populate) {
		return strapi.query('message', pluginId).find(params, populate);
	},

	/**
	 * Promise to fetch record
	 *
	 * @return {Promise}
	 */

	findOne(params, populate) {
		return strapi.query('message', pluginId).findOne(params, populate);
	},

	/**
	 * Promise to count record
	 *
	 * @return {Promise}
	 */

	count(params) {
		return strapi.query('message', pluginId).count(params);
	},

	/**
	 * Promise to add record
	 *
	 * @return {Promise}
	 */

	async create(data, { files } = {}) {
		const validData = await strapi.entityValidator.validateEntityCreation(
			strapi.plugins[pluginId].message,
			data,
		);
		const entry = await strapi.query('message', pluginId).create(validData);

		if (files) {
			// automatically uploads the files based on the entry and the model
			await strapi.entityService.uploadFiles(entry, files, {
				model: 'message',
				source: pluginId,
				// if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
			});
			return this.findOne({ id: entry.id });
		}

		return entry;
	},

	/**
	 * Promise to edit record
	 *
	 * @return {Promise}
	 */

	async update(params, data, { files } = {}) {
		const validData = await strapi.entityValidator.validateEntityUpdate(
			strapi.plugins[pluginId].message,
			data,
		);
		const entry = await strapi
			.query('message', pluginId)
			.update(params, validData);

		if (files) {
			// automatically uploads the files based on the entry and the model
			await strapi.entityService.uploadFiles(entry, files, {
				model: 'message',
				source: pluginId,
				// if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
			});
			return this.findOne({ id: entry.id });
		}

		return entry;
	},

	/**
	 * Promise to delete a record
	 *
	 * @return {Promise}
	 */

	delete(params) {
		return strapi.query('message', pluginId).delete(params);
	},

	/**
	 * Promise to search records
	 *
	 * @return {Promise}
	 */

	search(params) {
		return strapi.query('message', pluginId).search(params);
	},

	/**
	 * Promise to count searched records
	 *
	 * @return {Promise}
	 */
	countSearch(params) {
		return strapi.query('message', pluginId).countSearch(params);
	},
};
