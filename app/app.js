/*
	Writer by Cx
*/
const Koa = require('koa');
const app = new Koa();
var path= ["/","/code","/more"];
var filename = ["/index.html","/code.html","/more.html"];
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
    const ms = Date.now() - start;
	console.log(`${ctx.method}---${ctx.url} --- ${ms} ---${start}`);
});
const controller = require('./lib/controller');
controller.retGet(path,filename);
app.use(controller.retRoutes()) 
app.use(controller.retAllowedMethods());

app.listen(3000);