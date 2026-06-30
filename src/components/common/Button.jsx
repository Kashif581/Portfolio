export default function Button({
  children,
  href,
  variant = "primary",
  ...props
}) {

  const cls =
    variant === "outline"
      ? "btn-outline"
      : "btn-primary";

  if (href) {

    return (
      <a
        href={href}
        className={cls}
      >
        {children}
      </a>
    );

  }

  return (
    <button
      className={cls}
      {...props}
    >
      {children}
    </button>
  );
}