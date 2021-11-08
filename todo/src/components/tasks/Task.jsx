import moment from "moment";

const Task = ({ task }) => {
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>{task.task}</td>
        <td>{moment(task.date.toDate()).calendar()}</td>
        <td>
          <span className="material-icons" style={{ cursor: "pointer" }}>
            check_circle
          </span>
        </td>
        <td>
          <span className="material-icons text-danger" style={{ cursor: "pointer" }}>
            delete_sweep
          </span>
        </td>
      </tr>
    </>
  );
};

export default Task;
