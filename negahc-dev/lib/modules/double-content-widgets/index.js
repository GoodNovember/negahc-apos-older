module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Double Content',
	skipInitialModal: true,
	addFields: [
		{
			name: 'areaLeft',
			type: 'area',
			label: 'Left Area',
			contextual: true
		},
		{
			name: 'areaRight',
			type: 'area',
			label: 'Right Area',
			contextual: true
		}
	]
};