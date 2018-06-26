module.exports = {
	extend:'apostrophe-widgets',
	label:"Drawer",
	addFields:[
		{
			type:"string",
			name:"title",
			label:"Title"
		},
		{
			type: 'area',
			name: 'content',
			label: "Content",
			options:{
				widgets:{
					"apostrophe-rich-text":{
						toolbar:["Bold", "Italic"]
					},
					"apostrophe-images":{}
				}
			},
			construct(self, options){
				const superPushAssets = self.pushAssets
				self.pushAssets = ()=>{
					superPushAssets()
					self.pushAsset('stylesheet', 'always', {when:'always'})
					self.pushAsset('javascript', 'always', {when:'always'})
				}		
			}
		}
	]
}