// Application constants defined here
module.exports = {
    ROUTES : {
        GROUP : {
            CREATE : '/create',
            DATA : '/:name/member',
            DELETE : '/:name/delete',
            UPDATE : '/:name/update',
            LOGIN : '/login'
        },
        LEDGER : {
            ADD : '/:name/add',
            REMOVE : '/:name/remove',
            DATA : '/:name/data'
        },
        STATUS_CODE:{
            SUCCESS:200,
            INTERNAL_SERVER_ERROR:500,
            NOT_FOUND : 404
    
        },
    }
}