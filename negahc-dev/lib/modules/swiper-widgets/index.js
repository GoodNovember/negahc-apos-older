const UseMinifiedFiles = false

module.exports = {
	extend:'apostrophe-widgets',
	label:"Swiper",
	addFields:[
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
					if(UseMinifiedFiles){
						self.pushAsset('stylesheet', 'swiper.min', {when:'always'})
						self.pushAsset('javascript', 'swiper.min', {when:'always'})
					}else{
						self.pushAsset('stylesheet', 'swiper', {when:'always'})
						self.pushAsset('javascript', 'swiper', {when:'always'})
					}
				}		
			}
		}
	]
}