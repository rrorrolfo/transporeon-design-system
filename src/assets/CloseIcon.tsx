type CloseIconProps = {
  width?: string;
  height?: string;
  fillColor?: string;
};

export const CloseIcon = ({
  width = "20",
  height = "20",
  fillColor = "#111019",
}: CloseIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="close-icon"
    >
      <path
        d="M10 11.0625L6.58334 14.4792C6.43056 14.6319 6.25695 14.7049 6.06251 14.6979C5.86806 14.691 5.69445 14.6111 5.54167 14.4583C5.38889 14.3056 5.31251 14.1285 5.31251 13.9271C5.31251 13.7257 5.38889 13.5486 5.54167 13.3958L8.93751 10L5.52084 6.58333C5.36806 6.43055 5.29514 6.25347 5.30209 6.05208C5.30903 5.85069 5.38889 5.67361 5.54167 5.52083C5.69445 5.36805 5.87153 5.29166 6.07292 5.29166C6.27431 5.29166 6.45139 5.36805 6.60417 5.52083L10 8.9375L13.4167 5.52083C13.5694 5.36805 13.7465 5.29166 13.9479 5.29166C14.1493 5.29166 14.3264 5.36805 14.4792 5.52083C14.6319 5.67361 14.7083 5.85069 14.7083 6.05208C14.7083 6.25347 14.6319 6.43055 14.4792 6.58333L11.0625 10L14.4792 13.4167C14.6319 13.5694 14.7083 13.7431 14.7083 13.9375C14.7083 14.1319 14.6319 14.3056 14.4792 14.4583C14.3264 14.6111 14.1493 14.6875 13.9479 14.6875C13.7465 14.6875 13.5694 14.6111 13.4167 14.4583L10 11.0625Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default CloseIcon;
