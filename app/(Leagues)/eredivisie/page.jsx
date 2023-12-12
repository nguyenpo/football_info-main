import { filterLeague } from "../../../api";
import LeagueTable from "../../../components/LeagueTable";

const Eredivisie = async () => {
  const getEredivisie = await filterLeague('Eredivisie')
  return (
    <div className='w-[600px]'>
      {getEredivisie?.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default Eredivisie