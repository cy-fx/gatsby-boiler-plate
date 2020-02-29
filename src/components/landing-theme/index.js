import React from "react"
import { StaticQuery, graphql } from "gatsby"
import landingThemeStyle from "./style.module.scss"
import "../../global-styles/global.scss"

const LandingTheme = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1LandingTheme {
          pagesNavigation {
            listName
            listItems {
              item
              link
            }
          }
          greeting {
            buttonText
            heading
            paragraph {
              paragraph
            }
            link
            subHeading
            image {
              file {
                url
              }
            }
          }
        }
      }
    `}
    render={data => {
      const landingThemeData = data.contentfulV1LandingTheme
      console.log(landingThemeData)
      return (
        <React.Fragment>
          <header className={`${landingThemeStyle.container} displayRow`}>
            <section className={`${landingThemeStyle.headerStart} col-20`}>
              <figure className={landingThemeStyle.imageHolder}>
                <img className={landingThemeStyle.imageSource} />
              </figure>
            </section>
            <nav className={`${landingThemeStyle.headerMiddle} col-60`}>
              <ul className={landingThemeStyle.items}>
                <li className={landingThemeStyle.item}></li>
              </ul>
            </nav>
            <section className={`${landingThemeStyle.headerEnd} col-20`}>
              <span className={`${landingThemeStyle.handle}`}></span>
            </section>
          </header>
          <section
            className={`${landingThemeStyle.jumbotronBody} displayColumn`}
          ></section>
          <footer
            className={`${landingThemeStyle.footerBody} displayColumn`}
          ></footer>
        </React.Fragment>
      )
    }}
  />
)

export default LandingTheme
