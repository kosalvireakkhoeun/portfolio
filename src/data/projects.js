// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Seavphov',
		category: 'Web Application',
		img: require('@/assets/images/projects/seavphov.png'),
	},
	{
		id: 2,
		title: 'Plot Graph',
		category: 'Web Application',
		img: require('@/assets/images/projects/bi1.png'),
	},
	{
		id: 3,
		title: 'Campsite Listing',
		category: 'Web Application',
		img: require('@/assets/images/projects/camp.png'),
	},
	{
		id: 4,
		title: 'Plot Graph Admin',
		category: 'Mobile Application',
		img: require('@/assets/images/na.png'),
	},
	{
		id: 5,
		title: 'LED Mote',
		category: 'IOT + Web Application',
		img: require('@/assets/images/na.png'),
	}
];

export default projects;
