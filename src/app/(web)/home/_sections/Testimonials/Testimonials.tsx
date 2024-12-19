import { Group } from "@mantine/core";
import styles from "./styles.module.css";
import { TestimonialCard } from "./_components/TestimonialCard/TestimonialCard";
import { TESTIMONIALS } from "./_data/TESTIMONIALS_DATA";

export function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles["title-container"]}>
        <h1 className={styles.title}>
          We are building Opire to solve real-world problems
        </h1>
      </div>
      <div className={styles["testimonials"]}>
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
}
