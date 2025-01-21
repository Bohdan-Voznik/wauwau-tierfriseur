import styles from './CustomImage.module.scss';
import classnames from 'classnames';
import Image from 'next/image';

export const CustomImage = ({
  src,
  alt,
  width = 0,
  height = 0,
  fill = false,
  className,
  style,
  ...restProps
}) => {
  const customClassName = classnames(className, { [styles.fill]: fill });
  const customStyle = {
    aspectRatio: fill ? `${width}/${height}` : undefined,
    ...style,
  };

  return (
    <div className={customClassName} style={customStyle} {...restProps}>
      <Image
        fill={fill}
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
      />
    </div>
  );
};
