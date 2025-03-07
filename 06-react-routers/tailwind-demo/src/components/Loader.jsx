export default function Loader() {
  return (
    <div className="flex items-center justify-center bg-gray-50 h-100 rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="text-gray-600 text-lg font-medium">Loading news...</p>
      </div>
    </div>
  );
}
