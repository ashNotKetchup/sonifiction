/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ fontFamily: "siteTitle", color: `heading`, textDecoration: `none` }}
    >
      <div sx={{ my: 0, fontWeight: `heavy`, fontSize: [3, 4], textTransform: 'uppercase' }}>{siteTitle}</div>
    </Link>
  )
}

export default HeaderTitle
