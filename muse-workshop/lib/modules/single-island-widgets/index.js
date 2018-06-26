module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Single Island',
	skipInitialModal: true,
	addFields: [
		{
			name: 'areaContent',
			type: 'area',
			label: 'Content',
			contextual: true,
		},{
			name: "isFixed",
			type: "boolean",
			label: 'Background is Fixed',
			def: false,
			group: "background"
		},{
			name: "shouldUseLightText",
			type: "boolean",
			label: 'Use Light Text',
			def: false,
			group: "background"
		},{
			name:"backgroundColor",
			type:"spectrum-color-picker",
			label:"Background Color",
			group:"color",
			def:'transparent'
		},{
			name:'textColor',
			type:'spectrum-color-picker',
			label:'Text Color',
			group:'color',
			def:'black'
		},{
			name: "backgroundRepeatMode",
			label: 'Background Tile Mode',
			type: 'select',
			def: 'repeat',
			group: "background",
			choices:[
				{
					label: "Repeat, Normally",
					value: "repeat"
				},{
					label: "Repeat, Round Mode",
					value: "round"
				},{
					label: "Repeat, Space Mode",
					value: 'space'
				},{
					label: "No Repeat",
					value: "no-repeat"
				}
			]
		},{
			name: 'backgroundSizeMode',
			label: "Background Size",
			type: 'select',
			def: 'auto',
			group: "background",
			choices : [
				{
					label:"Automatic",
					value:'auto'
				},{
					label:"Cover Mode (ensure the image completely covers the island)",
					value:"cover"
				},{
					label:"Contain Mode (ensure you can see all of the image)",
					value:"contain"
				}
			]
		},{
			name: 'backgroundPositionMode',
			label: "Background Position",
			type: 'select',
			def:'auto',
			group: "background",
			choices:[
				{
					label:"Automatic",
					value:'auto'
				},{
					label:"Center",
					value:'center'
				},{
					label:"Top Left",
					value:'top left',
				},{
					label:"Top Center",
					value:"top center"
				},{
					label:"Top Right",
					value:"top right"
				},{
					label:"Center Left",
					value:"center left"
				},{
					label:"Center Center",
					value:"center"
				},{
					label:"Center Right",
					value:"center right"
				},{
					label:"Bottom Left",
					value:"bottom left"
				},{
					label:"Bottom Center",
					value:"bottom center"
				},{
					label:"Bottom Right",
					value:"bottom right"
				}
			]
		},{
			name: 'backgroundImage',
			label: 'Background Image',
			type: 'singleton',
			widgetType: 'apostrophe-images',
			options: { 
				addLabel: "Choose a Background Image",
				editLabel: "Change Background Image",
				limit: 1 
			},
			group: "background"
		},
	]
}