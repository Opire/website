import { Button } from "@mantine/core";

import styles from "./styles.module.css";
import clsx from "clsx";
import NextLink from "next/link";

type RequiredNotNull<T> = {
    [P in keyof T]: NonNullable<T[P]>;
};

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
};

type AnchorProps = Partial<RequiredNotNull<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children">>> & {
    href: string;
};

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    size?: 'medium' | 'big';
    variant?: 'primary' | 'secondary';
    highlight?: boolean;
    leftSection?: React.ReactNode;
    fullWidth?: boolean;
    onClick?: () => void;
}

type Overload = (ButtonProps & HtmlButtonProps) | (AnchorProps & ButtonProps);

const hasHref = (props: AnchorProps | HtmlButtonProps): props is AnchorProps => "href" in props;

export function OPButton({
    children,
    size = 'medium',
    variant = 'primary',
    highlight = false,
    leftSection = undefined,
    fullWidth = false,
    onClick = () => { },
    ...rest
}: Overload) {
    const isPrimary = variant === 'primary';

    if (hasHref(rest)) {
        return (
            <Button
                component={NextLink}
                {...rest}
                variant={isPrimary ? "filled" : "outline"}
                p={`0px 40px 0px 40px`}
                className={clsx(
                    styles.button,
                    styles[`button--${variant}`],
                    styles[`button--${size}`],
                    highlight && styles[`button--highlight`],
                    { [styles["button--full-width"]]: fullWidth }
                )}
                leftSection={leftSection}
            >
                {children}
            </Button>
        );
    }

    return (
        <Button
            variant={isPrimary ? "filled" : "outline"}
            p={`0px 40px 0px 40px`}
            onClick={onClick}
            className={clsx(
                styles.button,
                styles[`button--${variant}`],
                styles[`button--${size}`],
                highlight && styles[`button--highlight`],
                { [styles["button--full-width"]]: fullWidth }
            )}
            leftSection={leftSection}
        >
            {children}
        </Button>
    );
}
