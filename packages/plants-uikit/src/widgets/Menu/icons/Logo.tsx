import React from "react";
import styled from "styled-components";
import { textColor } from "styled-system";

interface LogoProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <LogoText style={{ color: `${textColor}`}} {...props}>
      DefiPlants
    </LogoText>
  );
};

const LogoText = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
