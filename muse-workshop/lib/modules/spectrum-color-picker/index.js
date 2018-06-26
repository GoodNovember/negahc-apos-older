const tinyColor = require('tinycolor2')

function construct(self, options){

	const addFieldType = () => {
		self.apos.schemas.addFieldType({
			name: 'spectrum-color-picker',
			converters:{
				csv(req, data, name, object, field, callback){
					const { def } = field
					const colorString = self.apos.launder.string(data[name], def)
					if(tinyColor(colorString).isValid() === false){
						object[name] = tinyColor('transparent').toRgbString()
					}else{
						object[name] = tinyColor(colorString).toRgbString()
					}
					setImmediate(callback)
				},
				form:'csv'
			},
			partial: self.fieldTypePartial
		})
	}

	const fieldTypePartial = (data) => self.partial('field', data)

	const pushAssets = () => {
		self.pushAsset('script', 'spectrum', {when:'user'})
		self.pushAsset('stylesheet', 'spectrum', {when:'user'})

		self.pushAsset('script', 'spectrum-client', {when:'user'})
	}

	self.addFieldType = addFieldType
	self.fieldTypePartial = fieldTypePartial
	self.pushAssets = pushAssets
}

function afterConstruct(self){
    self.addFieldType()
    self.pushAssets()
    self.pushCreateSingleton()
}

module.exports = {
	construct,
	afterConstruct,
}