import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import TagItem from './components/TagItem'
import TaskItem from './components/TaskItem'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    tasksList: [
      {
        id: uuid4(),
        task: 'Go to School',
        tag: 'Health',
      },
    ],
    taskInput: '',
    tagInput: tagsList[0].displayText,
  }

  onClickAddTask = () => {
    const {taskInput, tagInput} = this.state
    const newTask = {
      id: uuid4(),
      task: taskInput,
      tag: tagInput,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      taskInput: '',
    }))
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeTagInput = event => {
    this.setState({tagInput: event.target.value})
  }

  render() {
    const {tasksList, taskInput, tagInput} = this.state
    const filterTask = tasksList.filter(each => {
      if (each.tag === 'Health') {
        return each
      }
      return ''
    })
    console.log(filterTask)
    return (
      <div className="main-container">
        <div className="left-container">
          <h1 className="title">Create Tasks</h1>
          <label htmlFor="task">Task</label>
          <input
            value={taskInput}
            onChange={this.onChangeTaskInput}
            type="text"
            id="task"
            placeholder="Enter the task here.."
          />
          <label htmlFor="tags">Tags</label>
          <select onChange={this.onChangeTagInput} value={tagInput} id="tags">
            {tagsList.map(eachTag => (
              <option value={eachTag.displayText} key={eachTag.optionId}>
                {eachTag.displayText}
              </option>
            ))}
          </select>
          <div className="btn-container">
            <button
              onClick={this.onClickAddTask}
              type="button"
              className="custom-btn"
            >
              Add Task
            </button>
          </div>
        </div>
        <div className="right-container">
          <h1 className="right-title">Tags</h1>
          <ul className="tags-list-container">
            {tagsList.map(eachTag => (
              <TagItem eachDetails={eachTag} key={eachTag.optionId} />
            ))}
          </ul>
          <h1 className="right-title">Tasks</h1>
          <div className="task-container">
            {tasksList.length > 0 ? (
              <ul>
                {tasksList.map(eachTask => (
                  <TaskItem taskDetails={eachTask} key={eachTask.id} />
                ))}
              </ul>
            ) : (
              <div className="empty-task">
                <p>Their Is No Tasks</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
