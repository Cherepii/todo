import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="header__text">
      <h1 className="title">Todo List</h1>
      <p className="small-text">{toDo} more to do, {done} done</p>
    </div>
  )
}

export default AppHeader;