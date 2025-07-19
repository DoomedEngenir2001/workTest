from fastapi import APIRouter
routes = APIRouter()
@routes.get("/get_tasks")
async def get_tasks():
    return {
        "tasks": [
            {"id": "0", "action":"Проснуться" },
            {"id": "1","action":"Почистить зубы"},
            {"id": "2","action":"Пойти на работу"},
            {"id": "3","action":"Лечь спать"}
        ]
}
@routes.get("/i_can_do_it")
async def get_test():
    return {
        "message": "i_can_do_it"
    }