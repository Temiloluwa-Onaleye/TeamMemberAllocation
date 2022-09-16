
import Teams from './Teams';
import TeamMembers from './TeamMembers';

const Employees = ({ employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick }) => {

  return (
    <main className="container">
      <div className='row justify-content-center mt-3 mb-3'>

        <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />

      </div>
      <div className='row justify-content-center mt-3 mb-3'>

        <div className="col-8">
          <TeamMembers employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} />
        </div>

      </div>

    </main>
  );
};

export default Employees;