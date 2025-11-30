const SideTimeTab = () => {
  const timeList = generate15MinuteIntervalsTime();
  return (
    <div className="w-[150px] h-auto flex flex-col overflow-y-scroll">
      {timeList.map((time, index) => {
        return (
          <div
            key={index}
            className="h-14 w-full border-x border-b flex justify-center items-center"
          >
            <p>{time}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideTimeTab;

function generate15MinuteIntervalsTime() {
  const times = [];
  let minutes = 0;
  while (minutes < 1440) {
    const totalHours = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const AmPm = totalHours < 12 ? "AM" : "PM";
    const hour12 = String(totalHours % 12 || 12).padStart(2, "0");
    const minuteString = String(minute).padStart(2, "0");
    const formattedTime = `${hour12}:${minuteString} ${AmPm}`;
    times.push(formattedTime);
    minutes += 15;
  }
  return times;
}
