import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar(props) {
  let logoSvg = (
    <svg
      width="250.00000000000006"
      height="25.43920942152532"
      viewBox="0 0 369.89473684210526 43.48997225058029"
      className="css-1j8o68f"
    >
      <defs id="SvgjsDefs1926"></defs>
      <g
        id="SvgjsG1927"
        featurekey="Df7oLJ-0"
        transform="matrix(1.0651735067367554,0,0,1.0651735067367554,-7.2069668754885265,-31.056197311581087)"
        fill="#fff"
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M75.309,69.985c5.285-1.525,9.085-6.289,9.276-11.885c7.206-3.409,8.828-10.33,8.636-13.789   c-0.041-11.813-9.95-15.079-15.229-15.155c-5.988,0-9.719,3.103-11.761,5.608c-3.291-3.453-7.931-5.607-13.063-5.607   c-6.61,0-12.694,3.699-15.829,9.417c-1.289-0.436-2.617-0.656-3.97-0.656c-4.852,0-9.277,2.82-11.443,7.08   c-0.763-0.146-1.524-0.219-2.278-0.219c-7.104,0-12.882,5.779-12.882,12.882c0,5.784,3.874,10.758,9.299,12.323H75.309z    M72.668,65.709l-0.914,0.107H19.619l-0.915-0.107c-4.111-0.482-7.21-3.942-7.21-8.047c0-4.497,3.658-8.154,8.154-8.154   c0.932,0,1.863,0.18,2.847,0.55l2.378,0.895l0.721-2.437c1.038-3.51,4.162-5.868,7.775-5.868c1.358,0,2.694,0.367,3.971,1.09   l2.4,1.359l0.976-2.58c1.953-5.163,6.957-8.631,12.451-8.631c7.345,0,13.321,5.975,13.317,13.373l-0.015,0.299l-0.055,3.197   l3.074-0.885c0.857-0.247,1.568-0.363,2.235-0.363c4.494,0,8.15,3.657,8.15,8.154C79.875,61.767,76.776,65.227,72.668,65.709z    M83.777,53.163c-1.83-4.888-6.535-8.383-12.053-8.383c-0.222,0-0.444,0.007-0.667,0.021c-0.287-2.146-0.959-4.171-1.935-6.012   c1.079-1.67,3.815-4.903,8.824-4.903c1.079,0.024,10.545,0.524,10.545,10.5l0.004,0.153C88.501,44.599,88.78,50.021,83.777,53.163z   "></path>
        </g>
      </g>
      <g
        id="SvgjsG1928"
        featurekey="Ua4uQk-0"
        transform="matrix(2.535339593887329,0,0,2.535339593887329,110.22526283490436,-10.857086170565543)"
        fill="#fff"
      >
        <path d="M8.5 5.859999999999999 l3.16 0 l0 5.08 l0 9.06 l-3.16 0 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -4.7 z M6.28 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M21.18 9.6 l3.16 0 l0 10.4 l-3.16 0 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -0.96 z M18.96 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M33.06 9.44 c0.28 0 0.56 0 0.82 0.06 l0 3.02 c-0.24 -0.06 -0.52 -0.06 -0.72 -0.06 c-1.92 0 -3.46 1.38 -3.62 3.3 l0 4.24 l-3.16 0 l0 -10.4 l3.16 0 l0 2.54 c0.48 -1.56 1.68 -2.7 3.52 -2.7 z M46.84 20 l-0.98 -2.32 l-6.58 0 l-0.98 2.32 l-3.42 0 l6.22 -14 l2.94 0 l6.22 14 l-3.42 0 z M40.400000000000006 15.059999999999999 l4.36 0 l-2.18 -5.16 z M63.260000000000005 9.56 l-4.66 10.44 l-2.78 0 l-4.66 -10.44 l3.14 0 l2.92 6.68 l2.9 -6.68 l3.14 0 z M72.26 5.859999999999999 l3.16 0 l0 5.08 l0 9.06 l-3.16 0 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -4.7 z M70.04 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M84.94 9.6 l3.16 0 l0 10.4 l-3.16 0 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -0.96 z M82.72 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M96.82000000000001 9.44 c0.28 0 0.56 0 0.82 0.06 l0 3.02 c-0.24 -0.06 -0.52 -0.06 -0.72 -0.06 c-1.92 0 -3.46 1.38 -3.62 3.3 l0 4.24 l-3.16 0 l0 -10.4 l3.16 0 l0 2.54 c0.48 -1.56 1.68 -2.7 3.52 -2.7 z M102.42000000000002 5.859999999999999 l0 2.66 l-3.16 0 l0 -2.66 l3.16 0 z M102.42000000000002 9.6 l0 10.4 l-3.16 0 l0 -10.4 l3.16 0 z"></path>
      </g>
    </svg>
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleChangeIsOpen = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="navbar bg-neutral-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={handleChangeIsOpen}
              tabIndex={0}
              className="btn btn-ghost btn-circle sm:ml-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Homepage</a>
                  </li>
                  <li>
                    <a>Portfolio</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
              )}
              <div className="hidden sm:inline-block pl-[1rem] items-center">
                <LanguageSwitcher />
              </div>
          </div>
        </div>
        <div className="navbar-center">
          <a className="">{logoSvg}</a>
        </div>
        <div className="navbar-end sm:mr-10">
          <button
            onClick={props.navSearchBtn}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
