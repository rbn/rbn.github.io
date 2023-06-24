const navigation = [
  { name: "Cycling", href: "/cycling" },
  { name: "Music", href: "/music" },
  { name: "Productivity", href: "/prod" },
];

const TopNav = () => {
  return (
    <cluster-l role="list">
      {navigation.map((item) => (
        <a key={item.name} href={item.href}>
          {item.name}
        </a>
      ))}
    </cluster-l>
  );
};

export default TopNav;
