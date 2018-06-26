apos.define('spectrum-color-picker',{
	afterConstruct:function(self){
		self.addFieldType()
	},
	construct:function(self, options){

		self.addFieldType = addFieldType
		self.populate = populate
		self.convert = convert

		function addFieldType(){
			apos.schemas.addFieldType({
				name:'spectrum-color-picker',
				populate:self.populate,
				convert:self.convert
			})
		}

		function populate(object, name, $field, $el, field, callback){
			var $fieldset = apos.schemas.findFieldset($el, name)
			var $pickerElement = $fieldset.find('[data-spectrum-color-picker]')
		
			// initialize spectrum on element
			$pickerElement.spectrum({
				preferredFormat: "rgb",
				color:object[name],
				showInitial: true,
				showInput: true,
				showAlpha: true,
				change:function(color){
					var outputColor = color.toRgbString()
					$fieldset.data('color', outputColor)
				}
			})

			if(object[name]){
				$fieldset.data('color', object[name])
			}

			$pickerElement.spectrum("reflow")

			return setImmediate(callback)
		}

		function convert(object, name, $field, $el, field, callback){
			var $fieldset = apos.schemas.findFieldset($el, name)
			object[name] = $fieldset.data('color')
			if(field.required && (!object[name])){
				return setImmediate(_.partial(callback, 'required'))
			}else{
				return setImmediate(callback)
			}
		}

	}
})