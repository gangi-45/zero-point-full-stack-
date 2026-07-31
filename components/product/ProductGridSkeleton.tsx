type ProductCardSkeletonProps = {
  count?: number;
};

export function ProductGridSkeleton({ count = 8 }: ProductCardSkeletonProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="glass-card overflow-hidden"
          aria-hidden="true"
        >
          <div className="skeleton-shimmer aspect-square w-full rounded-none" />
          <div className="space-y-3 p-4">
            <div className="skeleton-shimmer h-4 w-4/5 rounded-lg" />
            <div className="skeleton-shimmer h-3 w-1/2 rounded-lg" />
            <div className="skeleton-shimmer h-9 w-full rounded-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
