// eslint-disable-next-line react/prop-types
const Navigations = ({ id }) => {
  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      {id.map((link) => (
        <a key={link.id} href={link.id}>
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Navigations;
