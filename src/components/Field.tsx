export const Field = ({ label, error, children }: any) => {
  return (
    <div className="flex flex-col mb-4 w-full text-left">
      <label className="text-sm font-semibold text-slate-600 mb-1 ml-1">
        {label}
      </label>
      <div className="relative">
        {children}
      </div>
      {error && (
        <span className="text-red-500 text-xs mt-1 ml-1">
          {error.message}
        </span>
      )}
    </div>
  );
};

