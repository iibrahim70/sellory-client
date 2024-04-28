interface suffleArrayProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  discount: number;
  discountPrice: number;
  rating: number;
  totalRating: number;
}

// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = (array: suffleArrayProps[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default shuffleArray;
