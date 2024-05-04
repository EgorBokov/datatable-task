import type { ISVGProps } from '@utils/types/SVGTypes.ts'

export const CloseIcon = ({ width, height, ...props }: ISVGProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="-0.5 0 25 25"
        {...props}
    >
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m3 21.32 18-18M3 3.32l18 18"
        />
    </svg>
)
