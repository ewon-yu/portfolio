type Props = { label: string }

/** 실제 화면 이미지가 들어갈 자리. Step 3에서 <img>로 교체.
 *  부모가 position/aspect-ratio를 정하고, 이 요소는 그 안을 채운다. */
export function Placeholder({ label }: Props) {
  return <div className="placeholder">{label}</div>
}
