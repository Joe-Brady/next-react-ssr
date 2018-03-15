import Link from 'next/link';

export default () => {
  const menuItems = [
    {href: '/about', text: 'About'},
    {href: '/contact', text: 'Contact'}
  ];

  return (
    <div>
      <h1>My great site</h1>
      <ul>
        {menuItems.map((item, i) =>
          <li key={i}>
            <Link href={item.href}>
              <a>{item.text}</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}