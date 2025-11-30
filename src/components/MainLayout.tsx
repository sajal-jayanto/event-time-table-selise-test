import SideTimeTab from "./SideTimeTab";
import TabbarDate from "./TabbarDate";
import VenueLabel from "./VenueLabel";

const MainLayout = () => {
  return (
    <div className="h-screen w-screen">
      <div className="overflow-x-scroll">
        <TabbarDate />
      </div>
      <VenueLabel />
      <div className="overflow-y-scroll h-screen">
        <SideTimeTab />
      </div>
    </div>
  );
};

export default MainLayout;
