"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // users에 key값이 있는가
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
            // {} : Object 형태로 넣어주겠다.
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
       return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }


    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.names.push(userInfo.names);
        users.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;