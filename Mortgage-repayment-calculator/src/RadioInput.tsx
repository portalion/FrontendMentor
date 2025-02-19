type RadioInputProps = {
  header: string;
  options: string[];
};

export default function RadioInput({ header, options }: RadioInputProps) {
  return (
    <>
      <h2>{header}</h2>
      {options.map((o) => (
        <RadioOption value={o} name={header.replace(/\s+/g, "")} />
      ))}
    </>
  );
}

function RadioOption({ value, name }: { value: string; name: string }) {
  return (
    <label>
      <input type="radio" name={name}></input>
      {value}
    </label>
  );
}
