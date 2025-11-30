const TabbarDate = () => {
  const today = new Date();
  return (
    <div className="h-20 w-fit">
      <div className="h-full flex overflow-y-scroll">
        {[0, 1, 2, 3, 4, 5, 6].map((index) => {
          return <DateLabel key={index} today={addDays(today, index)} />;
        })}
      </div>
    </div>
  );
};

export default TabbarDate;

const DateLabel = ({ today }: { today: Date }) => {
  const dayAsName = today.toLocaleDateString("en-US", { weekday: "long" });
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return (
    <div className="h-full w-[400px] border flex justify-center items-center">
      <p className="text-center">
        {dayAsName}
        <br />
        Date: {year}-{month}-{day}
      </p>
    </div>
  );
};

function addDays(date: Date, days: number) {
  const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  return newDate;
}
