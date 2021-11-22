export default function Avatar({ img }) {
  return (
    <img
      src={img}
      alt="Cinque Terre"
      style={{
        verticalAlign: "middle",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
      }}
    />
  );
}
