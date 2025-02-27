type InputProps = {
  placeholder?: string;
  variant?: 'outlined' | 'filled';
};

export const Input = ({ placeholder, variant }: InputProps) => {
  return (
    <div
      className={`flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring focus-within:border-blue-300 ${
        variant === 'outlined' ? 'border' : 'bg-white'
      }`}
    >
      <input
        type="text"
        className={`w-full outline-none border-none bg-transparent ${
          variant === 'outlined' ? 'placeholder-gray-400 text-white' : 'placeholder-gray-400 text-black'
        }
        `}
        placeholder={placeholder}
      />
      <img
        src="/arrow-right.png"
        alt="search"
        className="w-6 h-6 hover:cursor-pointer hover:opacity-70"
        style={
          variant === 'outlined'
            ? {
                filter: 'invert(100%)',
              }
            : {}
        }
      />
    </div>
  );
};
