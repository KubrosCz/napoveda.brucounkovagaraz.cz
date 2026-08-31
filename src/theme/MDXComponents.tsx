import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

interface CustomImgProps extends React.ComponentProps<'img'> {
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
}

const CustomImg: React.FC<CustomImgProps> = (props) => {
  return (
    <img
      loading={props.loading ?? 'lazy'}
      decoding={props.decoding ?? 'async'}
      {...props}
    />
  );
};

export default {
  ...MDXComponents,
  img: CustomImg,
};
