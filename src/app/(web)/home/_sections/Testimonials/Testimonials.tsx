import { Group } from "@mantine/core";
import styles from "./styles.module.css";
import TestimonialCard from "./_components/TestimonialCard/TestimonialCard";
import { TESTIMONIALS } from "./_data/TESTIMONIALS_DATA";

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <Group className={styles["title-container"]}>
        <h1 className={styles.title}>
          {/* We are building Opire with feedback from the best devs in the world */}
          We are building Opire to solve real-world problems
          {/* Opire is made by developers for developers */}
        </h1>
      </Group>
      <div className={styles["testimonials"]}>
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
