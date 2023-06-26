import { Link } from "react-router-dom";

const navigation = [
  { name: "Cycling", href: "/cycling" },
  { name: "Music", href: "/music" },
  { name: "Productivity", href: "/prod" },
];

const TopNav = () => {
  return (
    <cluster-l role="list">
      {navigation.map((item) => (
        <Link key={item.name} to={item.href}>
          {item.name}
        </Link>
      ))}
    </cluster-l>
  );
};

export default TopNav;
