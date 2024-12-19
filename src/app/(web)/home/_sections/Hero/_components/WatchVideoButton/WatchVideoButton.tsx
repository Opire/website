'use client';

import { OPButton } from "@/app/(web)/_shared/_components/Button/OPButton";
import { useState } from "react";
import { VideoModal } from "../VideoModal/VideoModal";
import { IconCaretRightFilled } from "@tabler/icons-react";

export function WatchVideoButton() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    return (
        <>
            <OPButton variant="secondary" size="big" highlight leftSection={<IconCaretRightFilled color="var(--color-primary)" />} onClick={() => {
                setIsVideoModalOpen(true)
            }}>WATCH A VIDEO</OPButton>

            <VideoModal onClose={() => setIsVideoModalOpen(false)} isOpen={isVideoModalOpen} />
        </>
    );
}