type NumberInputProps = {
  header: string;
  extension: string;
};

export default function NumberInput({ header, extension }: NumberInputProps) {
  return (
    <>
      <h2>{header}</h2>
      <div>
        <div>{extension}</div>
        <input type="number"></input>
      </div>
    </>
  );
}
