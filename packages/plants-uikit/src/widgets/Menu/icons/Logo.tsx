import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

interface LogoProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <LogoText style={{ color: `${isDark}`}} {...props}>
      DigiPlants
    </LogoText>
  );
};

const LogoText = styled(Link)`
  font-weight: 600;
`;

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
