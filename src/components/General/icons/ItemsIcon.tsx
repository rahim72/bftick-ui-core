interface TypeProps {
  width: number;
  height: number;
  className: string;
}

// ---------------------------------------------------------------------
export function DashboardIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M14 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zM4 13a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm5-2V5H5v6zM4 21a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm1-2h4v-2H5zm10 0h4v-6h-4zM13 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2 1v2h4V5z"
      ></path>
    </svg>
  );
}

// ---------------------------------------------------------------------
export function ProfileIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinejoin="round"
          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
        ></path>
        <circle cx={12} cy={7} r={3}></circle>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------
export function BlogIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="-2 -2 24 24"
    >
      <g fill="currentColor">
        <path d="M11.81 15c1.744 0 3.16-1.42 3.17-3.154L15 9.293l-.03-.14l-.083-.174l-.142-.11c-.184-.144-1.116.01-1.367-.218c-.178-.163-.206-.456-.26-.855c-.1-.771-.163-.811-.284-1.073c-.44-.929-1.63-1.627-2.448-1.723H8.169A3.174 3.174 0 0 0 5 8.16v3.686C5 13.58 6.426 15 8.17 15zm-3.6-7.419h1.757c.335 0 .607.273.607.604c0 .33-.272.604-.607.604H8.21a.608.608 0 0 1-.607-.604c0-.331.271-.604.607-.604M7.603 11.8c0-.33.271-.601.607-.601h3.57c.333 0 .604.27.604.601c0 .327-.27.601-.604.601H8.21a.607.607 0 0 1-.607-.601"></path>
        <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></path>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------
export function ProductIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return <></>;
}

// ---------------------------------------------------------------------
export function ProgramIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return <></>;
}

// ---------------------------------------------------------------------
export function CinemaIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4 15h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v3H1v-3h1v-2a2 2 0 0 1 2-2m7-8l4 3l-4 3zM4 2h16a2 2 0 0 1 2 2v9.54a3.89 3.89 0 0 0-2-.54V4H4v9c-.73 0-1.41.19-2 .54V4a2 2 0 0 1 2-2"
      ></path>
    </svg>
  );
}

// ---------------------------------------------------------------------
export function ConcertIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zM4 5v11h16V5zm6 2.5l5 3l-5 3z"
      ></path>
    </svg>
  );
}

// ---------------------------------------------------------------------
export function SettingIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M17.75 3A3.25 3.25 0 0 1 21 6.25v5.772a6.471 6.471 0 0 0-1.5-.709V8.5h-15v9.25c0 .966.784 1.75 1.75 1.75h5.063c.173.534.412 1.037.709 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75m-3.469 9.476a2 2 0 0 1-1.441 2.496l-.584.145a5.729 5.729 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.7 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.498.526a5.28 5.28 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.145a5.729 5.729 0 0 0-.006-1.807l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.631a5.278 5.278 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525c-.544.22-1.044.53-1.483.913zM17.503 19c-.8 0-1.45-.671-1.45-1.5c0-.828.65-1.5 1.45-1.5c.8 0 1.45.672 1.45 1.5c0 .829-.65 1.5-1.45 1.5"
      ></path>
    </svg>
  );
}

// ---------------------------------------------------------------------
export function SmsSettingIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v5.56a6.518 6.518 0 0 0-1.5-1.078V7.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 7.25v9.5c0 .966.784 1.75 1.75 1.75h5.826c.081.523.224 1.026.422 1.5H5.25A3.25 3.25 0 0 1 2 16.75zm12.278 6.726a2 2 0 0 1-1.441 2.496l-.584.144a5.728 5.728 0 0 0 .006 1.808l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.699 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.498.525a5.276 5.276 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.716 5.716 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.282 5.282 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525a5.28 5.28 0 0 0-1.483.912zM17.5 19c-.8 0-1.45-.672-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.672 1.45 1.5S18.3 19 17.5 19"
      ></path>
    </svg>
  );
}

// ---------------------------------------------------------------------
export function LogSettingIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M3 1h12.414L21 6.586V11h-2V9h-6V3H5v18h6v2H3zm12 2.414V7h3.586zm4 9.336v1.376c.715.184 1.352.56 1.854 1.072l1.193-.689l1 1.732l-1.192.688a4.008 4.008 0 0 1 0 2.142l1.192.688l-1 1.732l-1.193-.689A4 4 0 0 1 19 21.874v1.376h-2v-1.376a3.996 3.996 0 0 1-1.854-1.072l-1.193.689l-1-1.732l1.192-.688a4.004 4.004 0 0 1 0-2.142l-1.192-.688l1-1.732l1.193.688A3.996 3.996 0 0 1 17 14.127V12.75zm-2.751 4.283a1.991 1.991 0 0 0-.25.967c0 .35.091.68.25.967l.036.063a1.999 1.999 0 0 0 3.43 0l.036-.063A1.99 1.99 0 0 0 20 18c0-.35-.09-.68-.249-.967l-.036-.063a1.999 1.999 0 0 0-3.43 0z"
      ></path>
    </svg>
  );
}

export function UserCreateIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 12.75A3.75 3.75 0 1 1 15.75 9A3.75 3.75 0 0 1 12 12.75m0-6A2.25 2.25 0 1 0 14.25 9A2.25 2.25 0 0 0 12 6.75m7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25S5.75 17.05 5.75 19a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75m0-5.25a.76.76 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.76.76 0 0 1-.75.75"
      ></path>
      <path
        fill="currentColor"
        d="M20.75 12.75h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5"
      ></path>
    </svg>
  );
}

export function UserEditIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10.56 11.87a3.75 3.75 0 1 1 3.75-3.75a3.76 3.76 0 0 1-3.75 3.75m0-6a2.25 2.25 0 1 0 2.25 2.25a2.25 2.25 0 0 0-2.25-2.25m-7 13a.75.75 0 0 1-.75-.75c0-4.75 5.43-4.75 7.75-4.75c.72 0 1.36 0 1.94.07a.75.75 0 0 1 .69.8a.76.76 0 0 1-.81.69c-.54 0-1.14-.06-1.82-.06c-5.18 0-6.25 1.3-6.25 3.25a.74.74 0 0 1-.75.75m9.11.76a.75.75 0 0 1-.53-.22a.72.72 0 0 1-.22-.59l.16-1.92a.75.75 0 0 1 .21-.47l5.52-5.52a2.06 2.06 0 0 1 2.8 0a2 2 0 0 1 .58 1.44a1.86 1.86 0 0 1-.53 1.33l-5.52 5.52a.74.74 0 0 1-.46.22l-1.94.18Zm.88-2.34l-.06.76l.78-.07l5.33-5.33a.39.39 0 0 0 .09-.27a.59.59 0 0 0-.14-.38a.57.57 0 0 0-.68 0Z"
      ></path>
    </svg>
  );
}

export function UserVerifyIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path d="M17 4h.502c1.211 0 1.817 0 2.281.232a2.2 2.2 0 0 1 .985.985C21 5.68 21 6.287 21 7.498V8m-4 12h.502c1.211 0 1.817 0 2.281-.232a2.2 2.2 0 0 0 .985-.985c.232-.464.232-1.07.232-2.281V16M7 4h-.502c-1.211 0-1.817 0-2.281.232a2.2 2.2 0 0 0-.985.985C3 5.68 3 6.287 3 7.498V8m4 12h-.502c-1.211 0-1.817 0-2.281-.232a2.2 2.2 0 0 1-.985-.985C3 18.32 3 17.713 3 16.502V16m4.626 1.07c.419-.605 1.036-1.128 1.808-1.499A5.947 5.947 0 0 1 12 15c.91 0 1.795.2 2.566.571c.772.371 1.39.894 1.808 1.499"></path>
        <circle cx={12} cy={9} r={3}></circle>
      </g>
    </svg>
  );
}

export function UserManagementIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} `}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
      ></path>
    </svg>
  );
}

export function SlashIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className}`}
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0"
      ></path>
    </svg>
  );
}

export function MoreHorizontalIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className}`}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <circle cx={12} cy={12} r={1}></circle>
        <circle cx={19} cy={12} r={1}></circle>
        <circle cx={5} cy={12} r={1}></circle>
      </g>
    </svg>
  );
}

export function RecruitmentIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className}`}
      viewBox="0 0 2048 2048"
    >
      <path
        fill="currentColor"
        d="M2048 1280v768H1024v-768h256v-256h512v256zm-640 0h256v-128h-256zm512 384h-128v128h-128v-128h-256v128h-128v-128h-128v256h768zm0-256h-768v128h768zm-355-512q-54-61-128-94t-157-34q-80 0-149 30t-122 82t-83 123t-30 149q0 92-41 173t-116 136q45 23 84 53t73 68v338q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149H0q0-73 20-141t57-129t90-108t118-81q-74-54-115-135t-42-174q0-79 30-149t82-122t122-83t150-30q92 0 173 41t136 116q38-75 97-134t135-98q-74-54-115-135t-42-174q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 92-41 173t-116 136q68 34 123 85t93 118zM512 1408q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20m512-1024q0 53 20 99t55 82t81 55t100 20q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100"
      ></path>
    </svg>
  );
}
