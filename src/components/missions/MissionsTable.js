import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div className="table-wrapper">
      <Table striped bordered>
        <thead>
          <tr>
            <th className="mission">Mission</th>
            <th className="description">Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="center">
                <Button variant="secondary" size="sm">
                  NOT A MEMBER
                </Button>
              </td>
              <td className="center">
                {' '}
                <Button variant="outline-secondary">Join Mission</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionsTable;
