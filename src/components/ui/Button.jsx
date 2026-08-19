function Button({
    children,
    variant = "primary",
    href,
    type = "button",
    className = "",
    onClick,
    ...props
}) {
    const classes = `button button--${variant} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;