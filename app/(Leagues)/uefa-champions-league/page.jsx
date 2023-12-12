import { filterLeague } from "../../../api";
import LeagueTable from "../../../components/LeagueTable";

const UEFAChampionsLeague = async () => {
  const getUEFAChampionsLeague = await filterLeague("UEFA Champions League");
  return (
    <div className="w-[600px]">
      {getUEFAChampionsLeague?.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  );
};

export default SerieA;
