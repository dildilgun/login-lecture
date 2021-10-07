"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장", "kyhlhj1103"],
        password: ["1234", "1234", "123456", "1234"],
        names: ["우리밋", "나개발", "김팀장", "이형주"],
    };

    static getUsers(...fields) {
        const users = this.#users;
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
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.names.push(userInfo.names);
        users.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;