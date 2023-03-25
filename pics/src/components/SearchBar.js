function SearchBar({ onSubmit }) {
  console.log({ onSubmit });
  const handleSubmit = () => {
    onSubmit("cars");
  };

  return (
    <div>
      <input />
      <button onClick={handleSubmit}> SUBMIT </button>
    </div>
  );
}

export default SearchBar;
