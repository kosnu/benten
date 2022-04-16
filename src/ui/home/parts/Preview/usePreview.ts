import { useAtom } from "jotai"
import { previewAtom } from "../../state/previewAtom"

export function usePreview() {
  const [preview] = useAtom(previewAtom)

  return {
    preview: preview,
  }
}
