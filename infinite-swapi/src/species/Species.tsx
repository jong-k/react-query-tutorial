interface SpeciesType {
  name: string;
  language: string;
  averageLifespan: string;
}

export function Species({ name, language, averageLifespan }: SpeciesType) {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </li>
  );
}
