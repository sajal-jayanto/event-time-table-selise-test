import React from "react";
import { EventItem } from "./MainLayout";

const EvenTimeBox = ({
  eventConfig,
  selectedDate,
  timeList,
  venueList,
}: {
  eventConfig: EventItem[];
  selectedDate: number;
  timeList: string[];
  venueList: number[];
}) => {
  const eventsToday = eventConfig.filter(
    (event) => event.date === selectedDate
  );

  if (eventsToday.length === 0) {
    return (
      <>
        {timeList.map((index) => {
          return (
            <div
              key={index}
              className="h-14 flex text-center border-b border-gray-200"
            >
              {venueList.map((venueIndex) => {
                return (
                  <div
                    key={venueIndex}
                    className="flex-1 border-r border-gray-200 p-1"
                  ></div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }

  const SLOT_DURATION_MINUTES = 15;
  const ROW_HEIGHT_PIXELS = 56;

  return (
    <div className="relative">
      {timeList.map((index) => {
        return (
          <div
            key={index}
            className="h-14 flex text-center border-b border-gray-200"
          >
            {venueList.map((venueIndex) => {
              return (
                <div
                  key={venueIndex}
                  className="flex-1 border-r border-gray-200 p-1"
                ></div>
              );
            })}
          </div>
        );
      })}
      {eventsToday.map((event, eventIndex) => {
        const startMinutes = timeToTotalMinutes(event.startTime);
        const endMinutes = timeToTotalMinutes(event.endTime);
        const durationMinutes = endMinutes - startMinutes;

        const startMarkerIndex = timeList.findIndex(
          (time) => timeToTotalMinutes(time) <= startMinutes
        );
        const offsetMinutes =
          startMinutes - timeToTotalMinutes(timeList[startMarkerIndex]);
        const topPosition =
          startMarkerIndex * ROW_HEIGHT_PIXELS +
          offsetMinutes * (ROW_HEIGHT_PIXELS / SLOT_DURATION_MINUTES);
        const eventHeight =
          durationMinutes * (ROW_HEIGHT_PIXELS / SLOT_DURATION_MINUTES);

        return event.venue.map((venueId) => {
          const venueIndex = venueList.indexOf(venueId);

          if (venueIndex === -1) return null;
          const venueWidthPercentage = 100 / venueList.length;
          const leftPositionPercentage = venueIndex * venueWidthPercentage;

          return (
            <div
              key={`${eventIndex}-${venueId}`}
              className="absolute p-1 rounded-md text-white text-xs overflow-hidden cursor-pointer shadow-md text-center"
              style={{
                top: `${topPosition}px`,
                height: `${eventHeight}px`,
                backgroundColor: event.color,
                left: `${leftPositionPercentage}%`,
                width: `${venueWidthPercentage}%`,
              }}
              title={`${event.name} (${event.startTime} - ${event.endTime})`}
            >
              <div className="font-bold">{event.name}</div>
              <div>
                {event.startTime} - {event.endTime}
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};

export default EvenTimeBox;

const timeToTotalMinutes = (timeString: string): number => {
  const period = timeString.split(" ")[1];
  const timeParts = timeString.split(":");
  let hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
};
