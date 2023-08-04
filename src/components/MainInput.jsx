

function MainInput(props) {

  return (
    <>
      <select onChange={props.handleInputValueChange} 
              className="select select-accent bg-[#181818]
                        w-full max-w-xs
                        border-purple-700 focus:border-purple-950 focus:outline-purple-900 
                        ">
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
