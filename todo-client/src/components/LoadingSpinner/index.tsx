import s from "./index.module.scss";

interface LoadingSpinnerProps {
  bladeNum: number;
}

export default function LoadingSpinner({ bladeNum = 12 }: LoadingSpinnerProps) {
  const bladeNumArr = Array.from({ length: bladeNum }, (_, i) => i);

  return (
    <div className={s.wrapper}>
      <div>
        {bladeNumArr.map((_, i) => (
          <div
            key={i}
            className={s.spinnerBlade}
            style={{ transform: "rotate" }}
          />
        ))}
      </div>
    </div>
  );
}
