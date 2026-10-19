// Mach seal mark: ㅁㅎ (right column) + MC (left column), traditional 주문 style.
export default function Seal({ size = 40, color = '#13212E', stroke = 11, title }) {
  const font = "'IBM Plex Sans KR', sans-serif"
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect x="10" y="10" width="180" height="180" rx="6" fill="none" stroke={color} strokeWidth={stroke} />
      <line x1="100" y1="26" x2="100" y2="174" stroke={color} strokeWidth={stroke / 2.2} />
      <text x="146" y="92" textAnchor="middle" fontFamily={font} fontWeight="700" fontSize="76" fill={color}>ㅁ</text>
      <text x="146" y="168" textAnchor="middle" fontFamily={font} fontWeight="700" fontSize="76" fill={color}>ㅎ</text>
      <text x="56" y="90" textAnchor="middle" fontFamily={font} fontWeight="700" fontSize="64" fill={color}>M</text>
      <text x="56" y="166" textAnchor="middle" fontFamily={font} fontWeight="700" fontSize="64" fill={color}>C</text>
    </svg>
  )
}
