import s from './Container.module.css';
function Container(props) {
  return <div className={s.container}> {props.children}</div>;
}

export { Container };
