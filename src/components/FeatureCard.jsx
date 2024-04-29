import PropTypes from "prop-types";

FeatureCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
  cardBackground: PropTypes.string,
};

// I would use the first card just for show
function FeatureCard({ image, title, children, cardBackground }) {
  return (
    <div
      className={`h-[352px] sm:h-[358px] w-[308px] py-8 px-5 rounded-3xl space-y-6 ${cardBackground}`}
    >
      <div className="flex justify-center items-center h-32 w-[268px]">
        <div className="h-fit">
          <img src={image} alt={`${image}.replace(".svg", '')`} />
        </div>
      </div>

      <div className="w-full text-center">
        <h3 className="text-xl text-heading-color font-medium mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-buesa-grey text-base">{children}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
