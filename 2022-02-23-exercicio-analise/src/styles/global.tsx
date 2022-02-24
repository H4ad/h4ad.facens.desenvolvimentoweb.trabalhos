import { css, Global } from "@emotion/react";

export const GlobalStyles: React.FunctionComponent = () => (
  <>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html,
        body,
        div,
        span,
        object,
        iframe,
        figure,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        code,
        em,
        img,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        b,
        u,
        i,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        main,
        canvas,
        embed,
        footer,
        header,
        nav,
        section,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font-family: 'Calisto MT', serif;
          vertical-align: baseline;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          text-size-adjust: none;
        }

        footer,
        header,
        nav,
        section,
        main {
          display: block;
        }

        body {
          line-height: 1;
        }

        ol,
        ul {
          list-style: none;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        input {
          -webkit-appearance: none;
          border-radius: 0;
          border: none;
          outline: none;
        }

        @supports (padding-top: 20px) {
          html {
            --safe-area-top: var(--ion-statusbar-padding);
          }
        }

        @supports (padding-top: constant(safe-area-inset-top)) {
          html {
            --safe-area-top: constant(safe-area-inset-top);
            --safe-area-bottom: constant(safe-area-inset-bottom);
            --safe-area-left: constant(safe-area-inset-left);
            --safe-area-right: constant(safe-area-inset-right);
          }
        }

        @supports (padding-top: env(safe-area-inset-top)) {
          html {
            --safe-area-top: env(safe-area-inset-top);
            --safe-area-bottom: env(safe-area-inset-bottom);
            --safe-area-left: env(safe-area-inset-left);
            --safe-area-right: env(safe-area-inset-right);
          }
        }
      `}
    />
  </>
);
