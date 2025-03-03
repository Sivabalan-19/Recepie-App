
export function RandomSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg  overflow-hidden border border-orange-200 p-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="skeleton h-64 w-full"></div> {/* Image Skeleton */}
        </div>
        <div className="md:w-1/2 p-6">
          <div className="skeleton h-8 w-3/4 mb-4"></div> {/* Meal title */}
          <div className="skeleton h-5 w-32 mb-2"></div> {/* Category */}
          <div className="skeleton h-5 w-24 mb-4"></div> {/* Area */}
          <div className="mb-6">
            <div className="skeleton h-6 w-40 mb-3"></div>{" "}
            {/* Ingredients title */}
            <div className="skeleton h-4 w-full mb-2"></div>
            <div className="skeleton h-4 w-2/3 mb-2"></div>
            <div className="skeleton h-4 w-3/4 mb-2"></div>
            <div className="skeleton h-4 w-1/2"></div>
          </div>
          <div className="flex space-x-4">
            <div className="skeleton h-10 w-24 rounded-lg"></div>{" "}
            {/* Button Skeleton */}
            <div className="skeleton h-10 w-28 rounded-lg"></div>{" "}
            {/* Button Skeleton */}
          </div>
        </div>
      </div>
      <div className="p-6 border-t border-orange-200">
        <div className="skeleton h-6 w-48 mb-4"></div>{" "}
        {/* Instructions title */}
        <div className="skeleton h-4 w-full mb-2"></div>
        <div className="skeleton h-4 w-5/6 mb-2"></div>
        <div className="skeleton h-4 w-4/6 mb-2"></div>
        <div className="skeleton h-4 w-3/4"></div>
      </div>
    </div>
  );
}
