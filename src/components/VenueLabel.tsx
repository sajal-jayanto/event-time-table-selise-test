const VenueLabel = () => {
  return (
    <div className="h-10 border-x border-b flex justify-center items-center pl-[150px]">
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <div
            key={index}
            className={`h-full w-full flex-1 border-r flex justify-center items-center ${
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
