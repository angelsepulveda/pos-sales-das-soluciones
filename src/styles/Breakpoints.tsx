const sizes = {
  mobile: '575px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px',
};

export const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
