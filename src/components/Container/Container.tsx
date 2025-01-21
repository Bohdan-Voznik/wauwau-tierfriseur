import styles from './Container.module.scss';
import classnames from 'classnames';

export const Container = ({ children, className, ...restProps }) => {
  return (
    <div className={classnames(className, styles.container)} {...restProps}>
      {children}
    </div>
  );
};
