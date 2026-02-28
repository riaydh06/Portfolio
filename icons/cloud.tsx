// Cloud SVG component for parallax layers - moved outside component
export const Cloud = ({
  opacity = 0.6,
  width = "20%",
}: {
  opacity?: number;
  width?: string;
}) => (
  <svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    style={{ display: "block", width, opacity }}
    fill="rgba(255, 255, 255, 0.8)"
  >
    <path d="M50 60 Q30 60 30 50 Q30 40 50 40 Q55 25 70 25 Q85 25 90 40 Q110 40 110 50 Q110 60 90 60 Z" />
  </svg>
);