import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({employees, selectedTeam, handleEmployeeCardClick }) => {

  return (
    <div className="card-collection">
      {
        employees.map((employee) => (
          <TeamMemberCard employee={employee} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} />
        ))

      }
    </div>

  )
}

export default TeamMembers;