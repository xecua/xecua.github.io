import { SvgIcon } from "@mui/material"
import type { SvgIconProps]from '@mui/material/SvgIcon'

const NostrGuruIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#182029" />
      <rect x="2" y="8" width="20" height="4" fill="#87C7F4" />
    </SvgIcon>
  )
}

NostrGuruIcon.muiName = "NostrGuru"

export default NostrGuruIcon
