function parsePostData(ctx){
    returrn new Promise((resolve ,reject) => {
        try{
            let postdata = '';
            ctx.req.addListener('data',(data)=>{
                postdata += data
            })
            ctx.req.addListener('end',()=>{
                let parseData = parseQueryStr(postdata)
                resolve(parseData)
            })
        }catch(err){
            reject(err)
        }
    })
}