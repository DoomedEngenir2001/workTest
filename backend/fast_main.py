from fastapi import FastAPI
from endpoints import routes
from fastapi.middleware.cors import CORSMiddleware
# 8000 port
app = FastAPI(title ="test123ree4")
origins = [
        "http://localhost",
        "http://localhost:3000",
        "http://tiksiproducts47.ru",
        "https://tiksiproducts47.ru"
    ]
app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
)
app.include_router(routes)