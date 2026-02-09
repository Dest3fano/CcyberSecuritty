type Props = {
  title?: string
  className?: string
}

export default function LogoMark({ title = 'CySecConsole', className }: Props) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <path
        d="M12 2.25c3.7 2.2 6.6 2.7 8.75 3.05v7.05c0 5.1-3.1 8.7-8.75 10.4C6.35 21.05 3.25 17.45 3.25 12.35V5.3C5.4 4.95 8.3 4.45 12 2.25Z"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.9"
      />
      <path
        d="M9.1 9.2 6.9 12l2.2 2.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9 9.2 17.1 12l-2.2 2.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4 15.9 13.6 8.1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M12 6.1v13.2"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.16"
      />
    </svg>
  )
}
