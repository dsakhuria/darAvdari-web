

function MainInput(props) {

  return (
    <>
      <select onChange={props.handleInputValueChange} className="select select-accent w-full max-w-xs">
        <option className="text-neutral-500">
          Choose location...
        </option>
        <option>Tbilisi</option>
        <option>Batumi</option>
        <option>Chkhorotsku</option>
        <option>Zugdidi</option>
      </select>
    </>
  );
}

export default MainInput;
