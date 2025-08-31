export const endpoints = {
    store: {
        getInventory: '/store/inventory',
        postOrder: '/store/order',
        getPurchasedOrder: (orderId:number | string) => `/store/order/${orderId}`,
        deletePurchasedOrder: (orderId:number | string) => `/store/order/${orderId}`,        
    },
    user: {
        createWithList : '/user/createWithList',
        getUserByUserName: (userName: string) => `/user/${userName}`,
        putUser: (userName: string) => `/user/${userName}`,
        postUser: '/user',
        deleteUser: (userName: string) => `/user/${userName}`       
    }

}