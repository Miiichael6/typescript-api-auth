const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: whiteList,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  credentials: true,
}

export default corsOptions;