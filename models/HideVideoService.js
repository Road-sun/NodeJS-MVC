var mysql=require('../config/NodeMysql');


module.exports=async (id)=>{

    var result={};
    result.state=0;
    try {
        let res=await mysql.query("update video set hide=1 where id=?",[id]);
        // console.log(res);
        result.state=1;

    }catch (err) {
        console.log(err);
    }

    return result;

}
