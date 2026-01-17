import { CircleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <CircleAlert className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-primary mb-4 text-xl">Page Not Found</h3>
            <p className="text-muted max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have
              been moved or deleted.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 rounded-md font-medium text-white bg-bg-button  text-sm  hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 w-fit mx-auto px-3 py-2"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
