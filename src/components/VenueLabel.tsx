const VenueLabel = ({ venueList }: { venueList: number[] }) => {
  return (
    <div className="h-10 border-x border-b border-gray-200 flex justify-center items-center pl-[150px]">
      {venueList.map((item, index) => {
        return (
          <div
            key={index}
            className={`h-full w-full flex-1 border-r border-gray-200 flex justify-center items-center ${
              item == 1 && "border-l"
            }`}
          >
            <p>Venue{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VenueLabel;
