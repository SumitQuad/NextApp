interface Props {
  onSave: () => void;
}

function About(props: Props) {
  const { onSave } = props;

  return (
    <>
      <button className="rounded-full ..." onClick={onSave}>
        Save Changes
      </button>
      <button className="transition delay-300 duration-300 ease-in-out ...">
        Button B
      </button>
      <button className="transition delay-700 duration-300 ease-in-out ...">
        Button C
      </button>

      <div className="flex flex-row align-items-center">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </>
  );
}

export default About;
