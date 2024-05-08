// 1.=> AuthProvider > useEffect
// 2 => server site post                    =>index.js
// 3 => res.cookie('token', token, {
    // httpOnly : true, 
// })
// 4 => cors setup origin and credentials: true
// 5 user logout sever site then client site else >

// const cookieParser = require("cookie-parser")





// for secure api call
// 1.server site => install cookie parser and use it as a middleware
// 2. req.cookies
// 3. on the client side: => make api call using axios withCredentials: true , for credentials include while fetch

// then
// 1 const cookieParser = require(cookie-parser)
// 2 app.use(cookieParser())


// create our middleware 