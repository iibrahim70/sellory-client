import Image from "next/image";
import starIcon from "@/assets/icons/star.svg";

interface RatingProps {
  rating: number;
  totalRatings: number;
}

const Rating = ({ rating, totalRatings }: RatingProps) => {
  // Function to generate an array representing the rating
  const showStar = (total: number) => {
    return Array.from({ length: total }, (_, index) => index);
  };

  return (
    <div className="flex items-center space-x-1">
      {showStar(rating).map((item) => (
        <Image key={item} src={starIcon} alt="Star Image" />
      ))}
      <span className="text-xs lg:text-sm">({totalRatings})</span>
    </div>
  );
};

export default Rating;
