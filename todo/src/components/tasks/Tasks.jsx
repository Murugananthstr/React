import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({ tasks }) => {
  return (
    <>
      <table className="table table-dark table-sm caption-top container" style={{ marginTop: 20 }}>
        <thead>
          <tr className="text-info">
            <th scope="col">#</th>
            <th scope="col">Task Name</th>
            <th scope="col">Modified On</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <Task />
          <Task />
          <Task /> */}
          {tasks && tasks.map((task) => <Task task={task} key={task.id} />)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
    // uid: state.firebase.auth.uid,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      // where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);
