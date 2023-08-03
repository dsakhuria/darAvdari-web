function MainInput() {
  return (
    <>
      <select className="select select-accent w-full max-w-xs">
        <option disabled selected>
          Choose desired location...
        </option>
        <option>Tbilisi</option>
        <option>Batumi</option>
        <option>Chkhorotsku</option>
      </select>
    </>
  );
}

export default MainInput;
