const FILTER_COLORS = {
  purple: "brightness(0.5) sepia(1) saturate(10000%) hue-rotate(280deg)",
};

const EmojiContainer = ({ decimalCode, color }) => {
  const style = { filter: FILTER_COLORS[color] ?? "none" };
  return <span style={{ ...style }}>{decimalCode}</span>;
};

export default EmojiContainer;
