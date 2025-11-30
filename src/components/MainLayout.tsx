"use client";

import { useState } from "react";
import EvenTimeBox from "./EvenTimeBox";
import SideTimeTab from "./SideTimeTab";
import TabbarDate from "./TabbarDate";
import VenueLabel from "./VenueLabel";

const MainLayout = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const venueList = [1, 2, 3, 4];
  const dateList = [0, 1, 2, 3, 4, 5, 6];
  const timeList = generate15MinuteIntervalsTime();
  const eventConfig: EventItem[] = [
    {
      date: 1,
      name: "Event1",
      startTime: "12:15 AM",
      endTime: "01:45 AM",
      venue: [1],
      color: "red",
    },
    {
      date: 1,
      name: "Event2",
      startTime: "01:45 AM",
      endTime: "02:45 AM",
      venue: [4],
      color: "red",
    },
    {
      date: 1,
      name: "Event5",
      startTime: "09:15 AM",
      endTime: "10:45 AM",
      venue: [1],
      color: "red",
    },
    {
      date: 1,
      name: "Event7",
      startTime: "01:00 PM",
      endTime: "02:30 PM",
      venue: [4],
      color: "blue",
    },
    {
      date: 1,
      name: "Event8",
      startTime: "04:45 PM",
      endTime: "07:30 PM",
      venue: [1, 2],
      color: "green",
    },
    {
      date: 2,
      name: "Event0",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      venue: [3],
      color: "green",
    },
  ];

  return (
    <div className="h-screen w-screen">
      <div className="overflow-x-scroll">
        <TabbarDate
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          dateList={dateList}
        />
      </div>
      <VenueLabel venueList={venueList} />
      <div className="overflow-y-scroll h-screen">
        <div className="flex">
          <SideTimeTab timeList={timeList} />
          <div className="flex-1 h-auto">
            <EvenTimeBox
              eventConfig={eventConfig}
              selectedDate={selectedDate}
              timeList={timeList}
              venueList={venueList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

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

export interface EventItem {
  date: number;
  name: string;
  startTime: string;
  endTime: string;
  venue: number[];
  color: string;
}
