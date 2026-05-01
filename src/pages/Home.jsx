import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="container">
      <h2>Student Task Manager</h2>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;