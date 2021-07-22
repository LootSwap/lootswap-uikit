import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { renderWithTheme } from "../../testHelpers";
import { Menu, menuConfig, LangType } from "../../widgets/Menu";

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        tokenPriceUsd={0.23158668932877668}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-kLgntA hmuPEi"
      >
        <nav
          class="sc-iktFzd iZjnD"
        >
          <div
            class="sc-gsTCUz sc-dlfnbm jLyPtw byPlie"
          >
            <button
              aria-label="Toggle menu"
              class="sc-eCssSg xmVgq sc-jSgupP hCCShP"
              scale="md"
            >
              <svg
                class="sc-hKgILt SwFOM"
                color="textSubtle"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
              </svg>
            </button>
            <a
              aria-label="Lootswap home page"
              class="sc-gKsewC jnkuUV"
              href="/"
            >
              <img
                class="logo-img"
                src="https://lootswap.finance/static/media/loot_logo.5ca5dce3.png"
              />
            </a>
          </div>
          <div
            class="sc-gsTCUz sc-dlfnbm jLyPtw byPlie"
          >
            <div>
              <button
                class="sc-eCssSg jobfmw"
                scale="sm"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="sc-jJEJSO hYddnZ"
        >
          <div
            class="sc-dmlrTW kEhQWU"
          >
            <div
              class="sc-kEjbxe fnkFQx"
            >
              <div
                class="sc-fubCfw hA-DyLt rainbow"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  <svg
                    class="sc-hKgILt iyLyBh"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="sc-pFZIQ kJqcph"
              >
                <div
                  class="sc-fubCfw jOykoy"
                  role="button"
                >
                  <svg
                    class="sc-hKgILt iyLyBh"
                    color="text"
                    viewBox="0 0 24 25"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M 226.458333 162.208333 C 212.458333 200 176.125 226.916667 133.5 226.916667 C 91.458333 226.916667 55.583333 200.791667 41.166667 163.875 "
                        fill="none"
                        stroke="#2271E4"
                        stroke-linecap="round"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-opacity="1"
                        stroke-width="17.763"
                        transform="matrix(0.09375,0,0,0.09375,0,0)"
                      />
                      <path
                        d="M 47.75 78.083333 C 64.916667 48.583333 96.875 28.75 133.5 28.75 C 172.708333 28.75 206.625 51.541667 222.666667 84.583333 "
                        fill="none"
                        stroke="#2271E4"
                        stroke-linecap="round"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-opacity="1"
                        stroke-width="17.763"
                        transform="matrix(0.09375,0,0,0.09375,0,0)"
                      />
                      <path
                        d="M 3.402344 10.375 L 0.351562 15.65625 L 6.453125 15.65625 Z M 3.402344 10.375 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                        stroke="none"
                      />
                      <path
                        d="M 20.5625 12.882812 L 23.613281 7.601562 L 17.511719 7.601562 Z M 20.5625 12.882812 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                        stroke="none"
                      />
                      <path
                        d="M 12.386719 5.996094 L 8.125 9.742188 L 7.726562 15.0625 L 12.46875 18.558594 L 17.042969 15.0625 L 16.785156 9.742188 Z M 12.386719 5.996094 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                        stroke="none"
                      />
                    </g>
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Trade
                  </div>
                  <svg
                    class="sc-hKgILt fqjmCr"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-jrAGrp dfDREn"
                />
              </div>
              <div
                class="sc-fubCfw jOykoy"
                role="button"
              >
                <a
                  href="/questlog"
                >
                  <svg
                    class="sc-hKgILt iyLyBh"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Quest Log
                  </div>
                </a>
              </div>
              <div
                class="sc-fubCfw jOykoy"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  <svg
                    class="sc-hKgILt iyLyBh"
                    color="text"
                    viewBox="0 0 24 25"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 129.125 20 L 20.666667 57.791667 C 20.666667 57.791667 -4.541667 196.958333 126.916667 242.416667 C 126.916667 242.416667 255.125 206.833333 235.416667 57.791667 Z M 129.125 20 "
                      fill="none"
                      stroke="#2271E4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-opacity="1"
                      stroke-width="16.5393"
                      transform="matrix(0.09375,0,0,0.09375,0,0)"
                    />
                    <path
                      d="M 13.0625 8.859375 C 13.546875 9.734375 14.832031 11.679688 17.289062 13.277344 C 17.53125 13.429688 17.84375 13.40625 18.058594 13.214844 L 19.628906 11.785156 C 19.835938 11.59375 19.894531 11.292969 19.769531 11.039062 C 19.335938 10.160156 18.097656 8.15625 15.367188 6.738281 C 15.140625 6.621094 14.859375 6.652344 14.664062 6.820312 L 13.199219 8.074219 C 12.972656 8.269531 12.914062 8.597656 13.0625 8.859375 Z M 13.0625 8.859375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                    />
                    <path
                      d="M 97.333333 177.791667 L 163.083333 117.5 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="#2271E4"
                      stroke-linecap="round"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-opacity="1"
                      stroke-width="20.2708"
                      transform="matrix(0.09375,0,0,0.09375,0,0)"
                    />
                    <path
                      d="M 11.097656 8.695312 C 10.613281 9.566406 9.328125 11.511719 6.871094 13.109375 C 6.628906 13.265625 6.316406 13.238281 6.101562 13.046875 L 4.53125 11.617188 C 4.324219 11.425781 4.265625 11.125 4.390625 10.871094 C 4.824219 9.992188 6.0625 7.988281 8.792969 6.570312 C 9.023438 6.453125 9.300781 6.484375 9.496094 6.652344 L 10.960938 7.90625 C 11.1875 8.101562 11.246094 8.433594 11.097656 8.695312 Z M 11.097656 8.695312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="none"
                    />
                    <path
                      d="M 160.375 176 L 94.625 115.75 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="#2271E4"
                      stroke-linecap="round"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-opacity="1"
                      stroke-width="20.2708"
                      transform="matrix(0.09375,0,0,0.09375,0,0)"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Guilds
                  </div>
                </a>
              </div>
              <div
                class="sc-fubCfw jOykoy"
                role="button"
              >
                <a
                  href="https://analytics.lootswap.finance/"
                >
                  <svg
                    class="sc-hKgILt iyLyBh"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    Analytics
                  </div>
                </a>
              </div>
              <div
                class="sc-pFZIQ kJqcph"
              >
                <div
                  class="sc-fubCfw jOykoy"
                  role="button"
                >
                  <svg
                    class="sc-hKgILt iyLyBh"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    />
                  </svg>
                  <div
                    class="sc-iBPRYJ fNYuxK"
                  >
                    More
                  </div>
                  <svg
                    class="sc-hKgILt fqjmCr"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-jrAGrp dfDREn"
                />
              </div>
            </div>
            <div
              class="sc-idOhPF bbvLsP"
            >
              <button
                class="sc-eCssSg hobUeT sc-iqHYGH iOsNjo"
                scale="md"
              >
                <svg
                  class="sc-hKgILt fqjmCr"
                  color="text"
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="sc-hiSbYr crsCoN"
          >
            body
          </div>
          <div
            class="sc-bdfBwQ sc-gWHgXt celHMD IZmxf"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});
