import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../globalStyles';

export const HomeIcon = ({ isActive }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      stroke={isActive ? COLORS.navActive : COLORS.navInactive}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export const FinanceIcon = ({ isActive }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2v20M9 7h6M9 12h6M9 17h6"
      stroke={isActive ? COLORS.navActive : COLORS.navInactive}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export const TodoIcon = ({ isActive }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 6h16M4 12h16M4 18h7"
      stroke={isActive ? COLORS.navActive : COLORS.navInactive}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export const NotesIcon = ({ isActive }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 9h6M9 13h6"
      stroke={isActive ? COLORS.navActive : COLORS.navInactive}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);