export default function MessageNotification({message}) {
  return (
    <div className="date">
      <hr/>
      <span>{message}</span>
      <hr/>
    </div>
  );
}