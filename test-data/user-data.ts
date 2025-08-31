export const testUser = {
    listOfTestUsers: [
        {
            "username": "string0",
            "firstName": "string0",
            "lastName": "string0",
            "email": "string0",
            "password": "string0",
            "phone": "string0",
            "userStatus": 0
        },
        {
            "username": "string1",
            "firstName": "string1",
            "lastName": "string1",
            "email": "string1",
            "password": "string1",
            "phone": "string1",
            "userStatus": 1
        },
        {
            "username": "string2",
            "firstName": "string2",
            "lastName": "string2",
            "email": "string2",
            "password": "string2",
            "phone": "string2",
            "userStatus": 2
        }                   
    ],
    listOfTestUsersResponce: {
        code: 200, 
        type: 'unknown', 
        message: 'ok'
    },
    updatedUser : {
        "username": "stringUpdated",
        "firstName": "stringUpdated",
        "lastName": "stringUpdated",
        "email": "stringUpdated",
        "password": "stringUpdated",
        "phone": "stringUpdated",
        "userStatus": 999        
    },
    toBeUpdated: {
        "username": "toBeUpdated",
        "firstName": "toBeUpdated",
        "lastName": "toBeUpdated",
        "email": "toBeUpdated",
        "password": "toBeUpdated",
        "phone": "toBeUpdated",
        "userStatus": 111
    },
    notFound: 'notFoundUser',
    notFoundError: {
        code: 1, 
        type: 'error', 
        message: 'User not found'
    },
    toBeFound : {
        "username": "stringFind",
        "firstName": "stringFind",
        "lastName": "stringFind",
        "email": "stringFind",
        "password": "stringFind",
        "phone": "stringFind",
        "userStatus": 333        
    },
    toBeDeleted : {
        "username": "stringDelete",
        "firstName": "stringDelete",
        "lastName": "stringDelete",
        "email": "stringDelete",
        "password": "stringDelete",
        "phone": "stringDelete",
        "userStatus": 666       
    }
}