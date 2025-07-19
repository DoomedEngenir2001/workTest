function TaskItem(props)
{
   return (<div class="TaskItem">
        <input type="checkbox"/>
        <div >{props.task}</div>
   </div>); 
}
export default TaskItem;