class UserService {
    static async register(username: string, password: string) {
        return Promise.resolve({
            username,
            password,
        })
    }
}

export default UserService