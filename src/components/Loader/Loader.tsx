import { FadeLoader } from "react-spinners";

export default function Loader() {
  return (
    <>
      <FadeLoader
        color="#36d7b7"
        loading={true}
        speedMultiplier={1}
        height={15}
        width={5}
        radius={2}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
