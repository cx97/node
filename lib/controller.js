//路由模块
const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
exports.retGet = function(path,filename){
    for(let i =0;i<path.length;i++){
        router.get(path[i],async ctx =>{
            let html = fs.readFileSync('./view'+filename[i],'utf-8')
            console.log(filename[i]+" is readed");
            ctx.body = html;
        });
    }
    router.get('*', async (ctx, next) => {
        ctx.body = "<h2>404</h2>";
    })
}
exports.retRoutes = function(){
    return router.routes();
}
exports.retAllowedMethods = function(){
    return router.allowedMethods();
}