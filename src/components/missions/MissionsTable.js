import { useSelector } from 'react-redux';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>{}</th>
        </tr>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MissionsTable;
