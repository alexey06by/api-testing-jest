export const testStore ={
    testInventory : {
        sold: expect.any(Number), 
        unavailable: expect.any(Number), 
        pending: expect.any(Number), 
        available: expect.any(Number)
    },
    testOrder1 : {
        id: 1,
        petId: 1,
        quantity: 1,
        shipDate: "2025-06-29T12:30:50.481+0000",
        status: "placed",
        complete: true
    },
    testOrder2 : {
        id: 2,
        petId: 2,
        quantity: 2,
        shipDate: "2025-06-29T12:30:50.481+0000",
        status: "placed",
        complete: true
    },
    testOrder3 : {
        id: 3,
        petId: 3,
        quantity: 3,
        shipDate: "2025-06-29T12:30:50.481+0000",
        status: "placed",
        complete: true
    },
    testPurchaseOrderError : {
        code: 1, 
        type: 'error', 
        message: 'No data'
    },
    testOrderError : {
        code: 1, 
        type: 'error', 
        message: 'Order not found'
    }

}