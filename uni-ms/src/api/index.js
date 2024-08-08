const home=require('./modules/home')
const user=require('./modules/user')
const search=require('./modules/search')
const song=require('./modules/song')
const rankList=require('./modules/rankList')
const singer=require('./modules/singer')
const auth=require('./modules/auth')

export default{
	...home,
	...user,
	...search,
	...song,
	...rankList,
	...singer,
	...auth
}


