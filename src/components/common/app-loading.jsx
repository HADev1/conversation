export default function AppLoading({isSmall = false}) {
  return (
    <div className={`spinner-border ${isSmall ? "spinner-border-sm" : ""}`}/>
  );
}