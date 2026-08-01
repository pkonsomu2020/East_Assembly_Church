import { type CSSProperties, type ElementType, type ReactNode, useState } from 'react'

interface HoverProps {
  /** Element or component to render (e.g. 'div', 'a', 'button', or a Router Link). Defaults to 'div'. */
  as?: ElementType
  /** Base style, always applied. */
  style?: CSSProperties
  /** Extra style merged in while hovered — the React equivalent of the original `style-hover`. */
  hoverStyle?: CSSProperties
  children?: ReactNode
  /** Any other props (href, to, target, className, data-*, onClick, …) pass straight through. */
  [prop: string]: unknown
}

/**
 * Reproduces the original template's `style-hover` behaviour: a base inline
 * style plus an additional style object that is applied only while hovered.
 */
export function Hover({ as, style, hoverStyle, children, ...rest }: HoverProps) {
  const [hovered, setHovered] = useState(false)
  const El = (as || 'div') as ElementType
  return (
    <El
      style={{ ...style, ...(hovered && hoverStyle ? hoverStyle : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...rest}
    >
      {children}
    </El>
  )
}
