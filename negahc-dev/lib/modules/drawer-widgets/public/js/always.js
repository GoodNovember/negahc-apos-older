apos.define('drawer-widgets',{
	extend:'apostrophe-widgets',
	construct(self, options){
		self.play = function($widget, data, options){
			$widget.find('[data-drawer-title]').click(()=>{
				$widget.find('[data-drawer]').toggle()
				return true
			})
		}
	}
})