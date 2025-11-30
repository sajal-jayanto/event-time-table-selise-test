const SideTimeTab = ({ timeList }: { timeList: string[] }) => {
  return (
    <div className="w-[150px] h-auto flex flex-col overflow-y-scroll">
      {timeList.map((time, index) => {
        return (
          <div
            key={index}
            className="h-14 w-full border-x border-b border-gray-200 flex justify-center items-center"
          >
            <p>{time}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideTimeTab;
