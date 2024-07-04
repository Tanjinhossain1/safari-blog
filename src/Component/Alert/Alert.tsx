// components/Alert.tsx

interface AlertProps {
    type: "success" | "error";
    message: string;
  }

  const Alert: React.FC<AlertProps> = ({ type, message }) => {
    const alertClasses = {
      success: "bg-green-500",
      error: "bg-red-500",
    };

    return (
      <div className={`px-4 py-2 text-white ${alertClasses[type]} rounded shadow-md mb-4`}>
        {message}
      </div>
    );
  };

  export default Alert;