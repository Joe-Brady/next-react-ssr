import Header from './Header';

const Layout = (props) => (
  <div>
    <Header />
    <hr/>
    {props.children}
    <hr/>
    <h2>Footer here</h2>
  </div>
)

export default Layout;