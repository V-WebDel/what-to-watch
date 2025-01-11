import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21"><path fill="#232323" d="M4.167 10.5c-.46 0-.84.375-.782.832a6.668 6.668 0 1 0 7.447-7.447c-.457-.057-.832.321-.832.782 0 .46.376.826.83.901A5.001 5.001 0 0 1 10 15.5a5.001 5.001 0 0 1-4.931-4.17c-.076-.454-.442-.83-.902-.83Z"/></svg>
    </div>
  );
}

export default Spinner;
