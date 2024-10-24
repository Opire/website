import { Modal } from "@mantine/core";
import styles from "./styles.module.css";

export function VideoModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <>
            <Modal
                opened={isOpen}
                onClose={onClose}
                withCloseButton={false}
                size={"80%"}
                padding={0}
                centered
                transitionProps={{
                    transition: 'scale',
                    duration: 300,
                    timingFunction: 'linear'
                }}
                styles={{
                    root: {
                        backgroundColor: "transparent",
                    },
                    body: {
                        backgroundColor: "transparent",
                        overflow: "hidden",
                        aspectRatio: "16 / 9",
                        border: "2px solid var(--color-primary)",
                        borderRadius: "var(--radius-md)"
                    },
                    content: {
                        backgroundColor: "transparent",
                    },
                }}
            >
                <div
                    style={{
                        aspectRatio: "16 / 9",
                        width: "100%",
                    }}
                >
                    <iframe
                        width="100%"
                        height="100%"
                        style={{
                            borderRadius: "var(--radius-md)",
                        }}
                        src="https://www.youtube.com/embed/pq7fluN44hA"
                        title="Opire: Rewarded Issues for Open-Source Projects"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
            </Modal>
        </>
    );
}