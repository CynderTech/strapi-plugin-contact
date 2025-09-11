export default [
	{
		method: 'GET',
		path: '/messages',
		handler: 'message.find',
		config: {
			policies: [],
			auth: false,
		},
	},

	{
		method: 'GET',
		path: '/messages/:id',
		handler: 'message.findOne',
		config: {
			policies: [],
			auth: false,
		},
	},
	{
		method: 'POST',
		path: '/messages',
		handler: 'message.create',
		config: {
			policies: [],
			auth: false,
		},
	},
	{
		method: 'PUT',
		path: '/messages/:id',
		handler: 'message.update',
		config: {
			policies: [],
			auth: false,
		},
	},
	{
		method: 'DELETE',
		path: '/messages/:id',
		handler: 'message.delete',
		config: {
			policies: [],
			auth: false,
		},
	},
];