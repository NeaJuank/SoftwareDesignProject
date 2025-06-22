interface titleProps {
  title: string;
  titleWithColor: string;
}

const MainTitle: React.FC<titleProps> = ({ title, titleWithColor }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      {title}
      <span className="text-emerald-600"> {titleWithColor}</span>
    </h2>
  );
};

export default MainTitle;
