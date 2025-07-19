import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/fetchTasks";
import TaskItem from "./taskItem";
function TaskList() {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    console.log(tasks);
    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div class="TaskList">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task.action}/>
            ))}
        </div>
    );
}

export default TaskList;