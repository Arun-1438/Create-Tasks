const TaskItem = props => {
  const {taskDetails} = props
  const {task, tag} = taskDetails
  console.log('Task Item')
  return (
    <li className="task-list-item">
      <p className="task">{task}</p>
      <p className="tag">{tag}</p>
    </li>
  )
}

export default TaskItem
