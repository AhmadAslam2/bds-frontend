import instance from "."

export const signin = async (payload) => {
    return await instance.post("/signin", payload)
}
export const signup = async (payload) => {
    return await instance.post("/signup", payload)
} 