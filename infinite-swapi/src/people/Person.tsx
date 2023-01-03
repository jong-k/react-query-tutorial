interface PersonType {
  name: string;
  hairColor: string;
  eyeColor: string;
}

export function Person({ name, hairColor, eyeColor }: PersonType) {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  );
}
