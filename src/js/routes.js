//Start by importing ExpressAuth and adding the handler to the auth route.
import { ExpressAuth } from "@auth/express"
import express from "express"
 
const app = express()
 
// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
app.set("trust proxy", true)
app.use("/auth/*", ExpressAuth({ providers: [] }))