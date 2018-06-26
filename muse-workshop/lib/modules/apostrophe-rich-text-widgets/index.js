module.exports = {
	// The standard list copied from the module, plus sup and sub
	sanitizeHtml: {
		allowedTags: ['h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
			'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
			'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre',
			'sup', 'sub'
		],
		allowedAttributes: {
			a: ['href', 'name', 'target'],
			// We don't currently allow img itself by default, but this
			// would make sense if we did
			img: ['src'],
			p:['class', 'style'],
			h3:['class', 'style'],
			h4:['class', 'style'],
			h5:['class', 'style'],
			h6:['class', 'style'],
			div:['class', 'style'],
		},
		// Lots of these won't come up by default because we don't allow them
		selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont',
			'input', 'link', 'meta'
		],
		// URL schemes we permit
		allowedSchemes: ['http', 'https', 'ftp', 'mailto', 'tel'],
		allowedSchemesByTag: {}
	}
};