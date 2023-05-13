const RepoSkeleton = () => (
  <div className="animate-pulse rounded-lg border-2 border-dark2 bg-dark1 p-4">
    <div className="mb-2 h-5 w-3/5 rounded-sm bg-dark2"></div>
    <div className="mb-3 h-5 rounded-sm bg-dark2"></div>
    <div className="h-5 w-11/12 rounded-sm bg-dark2"></div>
    <div className="mt-3 flex gap-2">
      <div className="h-5 w-1/4 rounded-3xl bg-dark2 px-2"></div>
      <div className="h-5 w-1/4 rounded-3xl bg-dark2 px-2"></div>
      <div className="h-5 w-1/4 rounded-3xl bg-dark2 px-2"></div>
    </div>
  </div>
);

export default RepoSkeleton;
