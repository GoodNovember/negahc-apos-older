apos.define('color-picker',{
	afterConstruct:function(self)
	{
		self.addFieldType()
	},
	construct:function(self, options)
	{

		self.addFieldType = function()
		{
			apos.schemas.addFieldType({
				name:'color-picker',
				populate:self.populate,
				convert:self.convert
			})
		}

		self.populate = function(object, name, $field, $el, field, callback)
		{
			var $fieldset = apos.schemas.findFieldset($el, name)
			var $colorPicker = $fieldset.find('[data-color-picker]')
			var $preview = $fieldset.find('[data-color-picker-preview]')
			var $previous = $fieldset.find('[data-color-picker-previous-color]')

			if(object[name]){
				setPreviewColor(object[name])
				setPreviousColor(object[name])
			}

			var canvas = $colorPicker[0]
			var ctx = canvas.getContext('2d')

			var ColorBlockWidth = 4
			var ColorBlockHeight = 32

			ctx.setTransform(1,0,0,1,0,0)

			var blue
			var red
			var green
			var x = 0
			var y = 0

			for(blue = 0; blue < 256; blue += ColorBlockHeight)
			{
				x = 0
				for(green = 0; (green < 256); green += ColorBlockHeight)
				{
					for(red = 0; (red < 256); red += ColorBlockHeight)
					{
						ctx.fillStyle = toRGBString(red, green, blue)
						ctx.fillRect(x,y, ColorBlockWidth, ColorBlockHeight)
						x += ColorBlockWidth
					}
				}
				y+= ColorBlockHeight
			}

			$fieldset.data('color', object[name])
			$colorPicker.on('click',function(e){
				var offset = $(this).offset()
				var x = e.pageX - offset.left
				var y = e.pageY - offset.top

				var cellX = Math.floor(x/ColorBlockWidth)
				var cellY = Math.floor(y/ColorBlockHeight)

				var red = Math.min((cellX % 8) * ColorBlockHeight, 255)
				var green = Math.min(Math.floor(cellX / 8)*ColorBlockHeight, 255)
				var blue = Math.min(cellY*ColorBlockHeight, 255)

				var color = toRGBString(red, green, blue)

				$fieldset.data('color', color)

				setPreviewColor(color)

				return false
			})

			$previous.on('click', function(e){
				var previousColor = $previous.css('background-color')
				$fieldset.data('color', previousColor)
				setPreviewColor(previousColor)
			})

			function setPreviewColor(colorString){
				$preview.css('background-color', colorString)
			}

			function setPreviousColor(colorString){
				$previous.css('background-color', colorString)
			}

			function toRGBString(red, green, blue){
				return 'rgb(' + red + ',' + green + ',' +blue+ ')'
			}

			return setImmediate(callback)
		
		}

		self.convert = function(object, name, $field, $el, field, callback)
		{
			var $fieldset = apos.schemas.findFieldset($el, name)
			object[name] = $fieldset.data('color')
			if(field.required && (!object[name])){
				return setImmediate(_.partial(callback, 'required'))
			}
			return setImmediate(callback)
		}

	}
})