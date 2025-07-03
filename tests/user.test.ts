import { testUser } from '../test-data/user-data';
import { api } from '../utils/api';
import { endpoints } from '../utils/endpoints';

describe.only("Petstore API: check user", ()=>{
    beforeAll(async () => {
        await api
        .post(endpoints.user.postUser)
        .send(testUser.toBeUpdated)
        .set("Content-Type", "application/json");
        await api
        .post(endpoints.user.postUser)
        .send(testUser.toBeFound)
        .set("Content-Type", "application/json");
        await api
        .post(endpoints.user.postUser)
        .send(testUser.toBeDeleted)
        .set("Content-Type", "application/json");
        await api
        .delete(endpoints.user.deleteUser(testUser.notFound));
    });
    afterAll(async () => {
        await api
        .delete(endpoints.user.deleteUser(testUser.updatedUser.username));
        await api
        .delete(endpoints.user.deleteUser(testUser.toBeFound.username));
    });

    test("Should create list of users with given input array", async()=>{
        const res = await api
        .post(endpoints.user.createWithList)
        .send(testUser.listOfTestUsers)
        .set('Content-Type','application/json');

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject(testUser.listOfTestUsersResponce);
    });

    test("Should get user by user name", async()=>{
        const res = await api
        .get(endpoints.user.getUserByUserName(testUser.toBeFound.username));

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject(testUser.toBeFound);
    });

    test("Should send 404 status code with error details when user not found", async()=>{
        const res = await api
        .get(endpoints.user.getUserByUserName(testUser.notFound));

        expect(res.statusCode).toBe(404);
        expect(res.body.type).toBe(testUser.notFoundError.type);
        expect(res.body).toHaveProperty('message', 'User not found');
    });    

    test("Should update user", async()=>{
        const res = await api
        .put(endpoints.user.putUser(testUser.toBeUpdated.username))
        .send(testUser.updatedUser)
        .set('Content-Type','application/json');

        expect(res.statusCode).toBe(200);

        const resUpdatedUser = await api
        .get(endpoints.user.getUserByUserName(testUser.updatedUser.username));

        expect(resUpdatedUser.statusCode).toBe(200);
        expect(resUpdatedUser.body).toEqual(expect.objectContaining(testUser.updatedUser));
    });

    test("Should delete user", async()=>{
        const res = await api
        .delete(endpoints.user.deleteUser(testUser.toBeDeleted.username));

        expect(res.statusCode).toBe(200);
    });    
});
