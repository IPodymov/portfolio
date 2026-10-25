import { stats } from "@/content";
import { Icon } from "@/shared/icons";
import "./Stats.css";

export function Stats() {
  return (
    <section className="stats" aria-label="Цифры">
      <div className="container stats-inner">
        {stats.map(({ icon, value, label }) => (
          <div key={label} className="stat">
            <Icon name={icon} />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
