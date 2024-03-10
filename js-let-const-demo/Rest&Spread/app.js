const shoppingCart = [
	{
		name     : 'honey orchid',
		quantity : 2,
		price    : 13.5 // can have multiples [13.5,16.5]
	},
	{
		name     : 'african solstice',
		quantity : 4,
		price    : 25.99
	}
];

const cartCopy = [ ...shoppingCart ];

// deep clones not easy in JS*
