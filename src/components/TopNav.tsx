import React from "react";
const navigation = [{ name: "Cycling", href: "/cycling" }];

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
