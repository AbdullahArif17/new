interface IBook {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }
  
  const Page = async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
    const parsedResponse: IBook[] = await response.json();
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Book List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parsedResponse.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <p className="text-lg font-semibold text-gray-700 mb-2">
                <strong>ID:</strong> {book.id}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Name:</strong> {book.name}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Type:</strong> {book.type}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Available:</strong>{" "}
                <span
                  className={`font-bold ${
                    book.available ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {book.available ? "Yes" : "No"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
 export default Page;
  