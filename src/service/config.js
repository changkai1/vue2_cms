let BASE_URL = ""
if (process.env.NODE_ENV === "development") {
    BASE_URL = "/api"
} else if (process.env.NODE_ENV === "development") {
    BASE_URL = "http://coderwhy.org/prod"
} else {
    BASE_URL = "http://coderwhy.org/test"
}
export default BASE_URL
