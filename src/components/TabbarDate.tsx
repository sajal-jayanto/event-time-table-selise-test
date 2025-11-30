import { Dispatch, SetStateAction } from "react";

const TabbarDate = ({
  selectedDate,
  dateList,
  setSelectedDate,
}: {
  selectedDate: number;
  dateList: number[];
  setSelectedDate: Dispatch<SetStateAction<number>>;
}) => {
  const today = new Date();
  return (
    <div className="h-20 w-fit">
      <div className="h-full flex overflow-y-scroll">
        {dateList.map((item, index) => {
          const isSelected = item == selectedDate;
          return (
            <DateLabel
              key={index}
              isSelected={isSelected}
              today={addDays(today, index)}
              dateOnNumber={item}
              setSelectedDate={setSelectedDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TabbarDate;

const DateLabel = ({
  today,
  isSelected,
  dateOnNumber,
  setSelectedDate,
}: {
  today: Date;
  isSelected: boolean;
  dateOnNumber: number;
  setSelectedDate: Dispatch<SetStateAction<number>>;
}) => {
  const dayAsName = today.toLocaleDateString("en-US", { weekday: "long" });
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return (
    <div
      className={`h-full w-[400px] border border-gray-200 flex justify-center items-center ${
        isSelected && "bg-gray-300"
      }`}
      onClick={() => setSelectedDate(dateOnNumber)}
    >
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
