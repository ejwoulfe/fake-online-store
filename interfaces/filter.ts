export default interface FilterObject {
  reviews: number | null;
  priceRange: { min: number; max: number } | null;
}
