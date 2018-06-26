module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Main Navigation',
	// skipInitialModal: true,
	contextualOnly: true,
	construct(self, options){
		var superPushAssets = self.superPushAssets
		self.pushAssets = () => {
			if(typeof superPushAssets === "function"){
				superPushAssets()
			}else{
				console.error("SuperPushAssets is not a function!")
			}
			self.pushAsset('stylesheet', 'topNavigation', { when:'always' })
		}
	}
}
