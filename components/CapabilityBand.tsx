export default function CapabilityBand({ items }: { items: string[] }) {
  return (
    <div className="capbar">
      <div className="container">
        <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
      </div>
    </div>
  );
}
