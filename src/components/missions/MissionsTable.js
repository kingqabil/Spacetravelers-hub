import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
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
                <Badge size="sm" bg="secondary">
                  NOT A MEMEBER
                </Badge>
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
