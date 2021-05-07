import React from "react";
import styled from "styled-components";

interface LogoProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <LogoText style={{ color: `${textColor}`}} {...props}>
      DigiPlants
    </LogoText>
  );
};

const LogoText = styled.a`
  font-weight: 600;
`;

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
