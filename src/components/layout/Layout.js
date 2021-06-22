import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';


//by importing props, children is a built in property that props have, and it is everything inside the, in this case, <Layout> </Layout> tags.
//<Layout></Layout> then essentially serves as a wrapper for whatever's inside.
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;