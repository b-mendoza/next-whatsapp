import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      html {
        box-sizing: border-box;

        font-size: 62.5%;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;

        line-height: 1.5;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 500;

        letter-spacing: 0.01em;

        line-height: 1.3;
      }

      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      ol {
        margin: 0;

        padding: 0;
      }

      a {
        color: inherit;

        text-decoration: none;
      }

      svg {
        width: auto;
      }

      @media (min-width: 240px) {
        body {
          font-size: 1.4rem;
        }
      }

      @media (min-width: 340px) {
        body {
          font-size: 1.6rem;
        }
      }

      @media (min-width: 1500px) {
        body {
          font-size: 1.8rem;
        }
      }
    `}
  />
)

export const paddingContainer = css`
  padding: 2rem;

  @media (min-width: 340px) {
    padding: 3rem;
  }
`

export const fontReset = css`
  font-family: inherit !important;
  font-size: inherit !important;
`
