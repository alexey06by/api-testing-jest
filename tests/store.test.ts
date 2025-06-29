import { testStore } from '../test-data/store-data';
import { api } from '../utils/api';
import { endpoints } from '../utils/endpoints';

describe("Petstore API: check store", ()=>{
    beforeAll(async () => {
        await api.post(endpoints.store.postOrder)
        .send(testStore.testOrder2).set("Content-Type", "application/json");
        await api.post(endpoints.store.postOrder)
        .send(testStore.testOrder3).set("Content-Type", "application/json");
    });
    afterAll(async () => {
        await api
        .delete(endpoints.store.deletePurchasedOrder(testStore.testOrder1.id));
        await api
        .delete(endpoints.store.deletePurchasedOrder(testStore.testOrder2.id));
    });

    test("Should return pet inventories by status", async()=>{
        const res = await api.get(endpoints.store.getInventory);

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject(testStore.testInventory);
    });

    test("Should place order for a pet", async()=>{
        const res = await api
        .post(endpoints.store.postOrder)
        .send(testStore.testOrder1)
        .set("Content-Type", "application/json");

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject(testStore.testOrder1);  
    });

    test("Should send 400 status code with error details if place order request has undefined body", async()=>{
        const res = await api
        .post(endpoints.store.postOrder)
        .send()
        .set("Content-Type", "application/json");

        expect(res.statusCode).toBe(400);
        expect(res.body).toMatchObject(testStore.testPurchaseOrderError);  
    });    

    test("Should find purchased order by ID", async()=>{
        const res = await api.get(endpoints.store.getPurchasedOrder(2));

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject(testStore.testOrder2);  
    });
    
    test("Should recive 404 status code with error details when order is not found", async()=>{
        const res = await api.get(endpoints.store.getPurchasedOrder(1100000000));

        expect(res.statusCode).toBe(404);
        expect(res.body).toMatchObject(testStore.testOrderError);  
    });

    test("Should delete purchased order by ID", async()=>{
        const res = await api.delete(endpoints.store.deletePurchasedOrder(3));

        expect(res.statusCode).toBe(200);
 
        const resPurchasedOrder = await api.get(endpoints.store.getPurchasedOrder(3));
        expect(resPurchasedOrder.statusCode).toBe(404);
        expect(resPurchasedOrder.body).toMatchObject(testStore.testOrderError);  
    });           
});