import { CapIcon } from "./Icons";

export default function CapabilityBand({ items }: { items: string[] }) {
  return (
    <div className="capbar">
      <div className="container">
        <ul>
          {items.map((i) => (
            <li key={i} className="has-icon">
              <CapIcon label={i} />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
