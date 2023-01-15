import PropTypes from "prop-types";

function Step3({ onSelectLoc, emotion }) {
  const handleLocChange = (Loc) => {
    onSelectLoc(Loc);
  };

  return (
    <div>
      <h1 className="text-white font-cinzel text-2xl">
        Choisissez votre type de lieu
      </h1>
      <div className="flex flex-col">
        <button
          type="button"
          className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
          onClick={() => handleLocChange("MER")}
        >
          Mer
        </button>
        <button
          type="button"
          className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
          onClick={() => handleLocChange("VILLE")}
        >
          Ville
        </button>
        <button
          type="button"
          className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
          onClick={() => handleLocChange("MONTAGNE")}
        >
          Montagne
        </button>
        {emotion === "PEUR" ? (
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleLocChange("FORET")}
          >
            Forêt
          </button>
        ) : (
          <button
            type="button"
            className=" bg-yellow z-10 px-8 py-4 mt-7 rounded-full font-sans md:text-1xl text-xl text-white font-thin"
            onClick={() => handleLocChange("CAMPAGNE")}
          >
            Campagne
          </button>
        )}
      </div>
    </div>
  );
}
Step3.propTypes = {
  onSelectLoc: PropTypes.func.isRequired,
  emotion: PropTypes.string.isRequired,
};

export default Step3;
