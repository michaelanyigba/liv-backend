import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks
        sameSite: "None", // prevent CSRF attack
        secure: true
    })
}
export default generateTokenAndSetCookie

// export default generateTokenAndSetCookie
// const generateTokenAndSetCookie = (userId, res)=>{
//     const token = jwt.sign({userId}, process.env.JWT_SECRET, {
//         expiresIn: "15d"
//     });
//     res.cookie("jwt", token, {
//         maxAge: 15 * 24 * 60 * 60 * 1000,
//         httpOnly: true, // prevent XSS attacks
//         sameSite: "strict", // prevent CSRF attack
//         secure: process.env.NODE_ENV !== "production"
//     })
// }

// 