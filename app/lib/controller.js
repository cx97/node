/*
	Writer by Cx
*/
//  
//  
//      ┏┛ ┻━━━━━┛ ┻┓  
//      ┃　　　　　　 ┃  
//      ┃　　　━　　　┃  
//      ┃　┳┛　  ┗┳　┃  
//      ┃　　　　　　 ┃  
//      ┃　　　┻　　　┃  
//      ┃　　　　　　 ┃  
//      ┗━┓　　　┏━━━┛  
//        ┃　　　┃   神兽保佑  
//        ┃　　　┃   代码无BUG！  
//        ┃　　　┗━━━━━━━━━┓  
//        ┃　　　　　　　    ┣┓  
//        ┃　　　　         ┏┛  
//        ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛  
//          ┃ ┫ ┫   ┃ ┫ ┫  
//          ┗━┻━┛   ┗━┻━┛  


/**
 * 数据库模块
 */
const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'cx'
// });

function handleError (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connection().content;
        } else {
            console.error(err.stack || err);
        }
    }
}

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cx'
});

connection.connect(handleError);

connection.on('error', handleError);

const getData = function(tab){
    return new Promise(function(resolve,reject){
        connection.query("select * from "+tab, function (error, results) {
            if (error)  throw error;
            resolve(results);  
        });
    });
    connection.end(); 
};
const selectData = function(inf,tab,condition){
    return new Promise(function(resolve,reject){
        connection.query("select "+inf+" from "+tab+" where "+condition, function (error, results) {
            console.log("select "+inf+" from "+tab+"where"+condition);
            if (error)  throw error;
            resolve(results);  
        });
    })
}
const addData = function(inf,tab,value){
    return new Promise(function(resolve,reject){
        connection.query("insert into "+inf+" "+tab+" values "+value, function (error, results,fields) {
            console.log("insert into "+inf+" "+tab+" values "+value);
            if (error)  throw error;
            resolve(results.affectedRows);  
        });
    })
}
const delData = function(tab,condition){
    return new Promise(function(resolve,reject){
        connection.query("delete from "+tab+" where "+condition, function (error, results,fields) {
            console.log("delete from "+tab+" where "+condition);
            if (error)  throw error;
            resolve(results.affectedRows);  
        });
    })
}

//                            _ooOoo_    
//                           o8888888o    
//                           88" . "88    
//                           (| -_- |)    
//                            O\ = /O    
//                        ____/`---'\____    
//                      .   ' \\| |// `.    
//                       / \\||| : |||// \    
//                     / _||||| -:- |||||- \    
//                       | | \\\ - /// | |    
//                     | \_| ''\---/'' | |    
//                      \ .-\__ `-` ___/-. /    
//                   ___`. .' /--.--\ `. . __    
//                ."" '< `.___\_<|>_/___.' >'"".    
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |    
//                 \ \ `-. \_ __\ /__ _/ .-` / /    
//         ======`-.____`-.___\_____/___.-`____.-'======    
//                            `=---='    
//    
//         .............................................    
//                  佛祖保佑             永无BUG   
//          佛曰:    
//                  写字楼里写字间，写字间里程序员；    
//                  程序人员写程序，又拿程序换酒钱。    
//                  酒醒只在网上坐，酒醉还来网下眠；    
//                  酒醉酒醒日复日，网上网下年复年。    
//                  但愿老死电脑间，不愿鞠躬老板前；    
//                  奔驰宝马贵者趣，公交自行程序员。    
//                  别人笑我忒疯癫，我笑自己命太贱；    
//                  不见满街漂亮妹，哪个归得程序员？  


/**
 * 读取模板模块
 */
const fs = require('fs');
const getHtml =function(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename, 'utf8', function(err, data){
            if (err) throw err;
            resolve(data); 
        });
    })
}

/**
 * 会话模块
 */

// #                      d*##$.
// # zP"""""$e.           $"    $o
// #4$       '$          $"      $
// #'$        '$        J$       $F
// # 'b        $k       $>       $
// #  $k        $r     J$       d$
// #  '$         $     $"       $~
// #   '$        "$   '$E       $
// #    $         $L   $"      $F ...
// #     $.       4B   $      $$$*"""*b
// #     '$        $.  $$     $$      $F
// #      "$       R$  $F     $"      $
// #       $k      ?$ u*     dF      .$
// #       ^$.      $$"     z$      u$$$$e
// #        #$b             $E.dW@e$"    ?$
// #         #$           .o$$# d$$$$c    ?F
// #          $      .d$$#" . zo$>   #$r .uF
// #          $L .u$*"      $&$$$k   .$$d$$F
// #           $$"            ""^"$$$P"$P9$
// #          JP              .o$$$$u:$P $$
// #          $          ..ue$"      ""  $"
// #         d$          $F              $
// #         $$     ....udE             4B
// #          #$    """"` $r            @$
// #           ^$L        '$            $F
// #             RN        4N           $
// #              *$b                  d$
// #               $$k                 $F
// #               $$b                $F
// #                 $""               $F
// #                 '$                $
// #                  $L               $
// #                  '$               $
// #                   $               $

/**
 * 路由模块
 */
const Router = require('koa-router');
const router = new Router();
const s_request = require('sync-request');  /*适合爬取得模块*/
const koabody = require('koa-body');        /*读取post用的模块*/
exports.retGet = function(path,filename){
    for(let i =0;i<path.length;i++){
        router.get(path[i],async ctx =>{
            let html = await getHtml('./view'+filename[i]);
            /* 同步读取法 */
            // let html = fs.readFileSync('./view'+filename[i],'utf-8')
            console.log(filename[i]+" is readed");
            ctx.body = html;
        });
    }
    router.get('/show',async (ctx, next)=>{
        let l = await getData("content");
        let html = await getHtml('./view/show.html');
        let div = html.split("shone");
        let div0 = div[0];
        let div1 = div[1];
        let ndiv1 = "";
        let div2 = div[2];
        let sm = div1.split("shppp");
        for(let i =0;i<l.length;i++){
            let x = sm[0]+"/more/"+l[i].id+sm[1]+(i+1)+sm[2]+l[i].content+sm[3]+l[i].writer+sm[4];
            ndiv1 += x;
        }
        ctx.body= div[0]+ndiv1+div[2];
    });
    router.get('id','/more/:id',async ctx=>{
        let id = ctx.params;
        let res = await selectData("*","content"," id='"+id.id+"'");
        let html = await getHtml('./view/more.html');
        let h=html.split("本网站真在建设中......");
        ctx.body = h[0]+res[0].title+h[1]+res[0].content+h[2]+res[0].writer+h[3];
    })
    router.get('/del',async (ctx, next)=>{
        let value = ctx.request.header.cookie;
        if(value!=null){
            let l = await getData("content");
            let html = await getHtml('./view/del.html');
            let div = html.split("shone");
            let div0 = div[0];
            let div1 = div[1];
            let ndiv1 = "";
            let div2 = div[2];
            let sm = div1.split("shppp");
            for(let i =0;i<l.length;i++){
                let x = sm[0]+"/del/"+l[i].id+sm[1]+l[i].id+sm[2]+l[i].content+sm[3]+l[i].writer+sm[4];
                ndiv1 += x;
            }
            ctx.body= div[0]+ndiv1+div[2];
        }else{
            ctx.redirect('/');
        }
    });
    router.get('id','/del/:id',async ctx=>{
        let id =ctx.params.id; 
        let value = ctx.request.header.cookie;
        if(value!=null){
            let res = await delData("content"," id = '"+id+"'")
            ctx.body=res;
        }else{
            ctx.redirect('/');
        }
    });
    router.get('/doget',async(ctx,next)=>{
        ctx.body = ctx.query;
    });
    router.get("/select",async ctx=>{
        let data = await getData("content");
        ctx.body=data;
    });
    // router.get('/show',async(ctx,next)=>{
    //      let res = s_request('GET','http://localhost:3000/doget?uname=123');
    //      ctx.body = res.getBody('utf8');
    // });
    router.get('/login',koabody(),async (ctx,next)=>{
        ctx.body = await getHtml('./view/login.html')
    });
    router.post('/login',koabody(),async(ctx,next)=>{
        let uname = ctx.request.body.uname;
        let upwd = ctx.request.body.upwd;
        let data = await selectData("*","admin","uname='"+uname+"' and upwd='"+upwd+"'");
        if(data[0]!=null){
           ctx.cookies.set(
                'id', 
                'chen',
                {
                domain: 'localhost',  // 写cookie所在的域名
                path: '/add',       // 写cookie所在的路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: Date.now()+10000,  // cookie失效时间
                httpOnly: false,  // 是否只用于http请求中获取
                overwrite: false  // 是否允许重写
                }
            )
            ctx.cookies.set(
                'id', 
                'chen',
                {
                domain: 'localhost',  // 写cookie所在的域名
                path: '/del',       // 写cookie所在的路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: Date.now()+10000,  // cookie失效时间
                httpOnly: false,  // 是否只用于http请求中获取
                overwrite: false  // 是否允许重写
                }
            )
            ctx.cookies.set(
                'id', 
                'chen',
                {
                domain: 'localhost',  // 写cookie所在的域名
                path: '/add/:id',       // 写cookie所在的路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: Date.now()+10000,  // cookie失效时间
                httpOnly: false,  // 是否只用于http请求中获取
                overwrite: false  // 是否允许重写
                }
            )
            ctx.redirect('/add');
        }else{
            ctx.redirect('/login');
        }
    });
    router.get('/add',async ctx=>{
        let value = ctx.request.header.cookie;
        if(value!=null){
            ctx.body = await getHtml("./view/add.html");
        }else{
            ctx.redirect('/');
        }
    })
    router.post('/add',koabody(),async ctx=>{
        let value = ctx.request.header.cookie;
        if(value!=null){
            let l = await addData("content","(`title`,`content`,`writer`)","('"+ctx.request.body.title+"','"+ctx.request.body.content+"','"+ctx.request.body.writer+"')");
            console.log(ctx.request.body);
            ctx.redirect('/add');
        }else{
            ctx.redirect('/');
        }
    })
    router.get('*', async (ctx, next) => {
        ctx.body = "<h2>404</h2>";
    });
}


// #                  ___====-_  _-====___
// #            _--^^^#####//      \\#####^^^--_
// #         _-^##########// (    ) \\##########^-_
// #        -############//  |\^^/|  \\############-
// #      _/############//   (@::@)   \\############\_
// #     /#############((     \\//     ))#############\
// #    -###############\\    (oo)    //###############-
// #   -#################\\  / VV \  //#################-
// #  -###################\\/      \//###################-
// # _#/|##########/\######(   /\   )######/\##########|\#_
// # |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
// # `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
// #    `   `  `      `   / | |  | | \   '      '  '   '
// #                     (  | |  | |  )
// #                    __\ | |  | | /__
// #                   (vvv(VVV)(VVV)vvv)


/**
 * 路由接口
 */
exports.retRoutes = function(){
    return router.routes();
}
exports.retAllowedMethods = function(){
    return router.allowedMethods();
}

// #      ,----------------,              ,---------,
// #         ,-----------------------,          ,"        ,"|
// #       ,"                      ,"|        ,"        ,"  |
// #      +-----------------------+  |      ,"        ,"    |
// #      |  .-----------------.  |  |     +---------+      |
// #      |  |                 |  |  |     | -==----'|      |
// #      |  |  I LOVE DOS!    |  |  |     |         |      |
// #      |  |  Bad command or |  |  |/----|`---=    |      |
// #      |  |  C:\>_          |  |  |   ,/|==== ooo |      ;
// #      |  |                 |  |  |  // |(((( [33]|    ,"
// #      |  `-----------------'  |," .;'| |((((     |  ,"
// #      +-----------------------+  ;;  | |         |,"
// #         /_)______________(_/  //'   | +---------+
// #    ___________________________/___  `,
// #   /  oooooooooooooooo  .o.  oooo /,   \,"-----------
// #  / ==ooooooooooooooo==.o.  ooo= //   ,`\--{)B     ,"
// # /_==__==========__==_ooo__ooo=_/'   /___________,"