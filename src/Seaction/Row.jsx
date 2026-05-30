const Row = ({ data, animation }) => {
    return (
      <div className={`flex items-center gap-6 md:gap-10 overflow-hidden ${animation}`}>
        {[...data, ...data].map((elem, idx) => (
          <div
            key={idx}
            className="
              shrink-0
              w-40 sm:w-28 md:w-68 2xl:w-68
              h-44 sm:h-16 md:h-28 2xl:h-28
              flex items-center justify-center
            "
          >
            <img
              src={elem.img}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        ))}
      </div>
    );
  };

export default Row
