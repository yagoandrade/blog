"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: transparent;
`;

const ProgressBar = styled.div<{ width: number }>`
  height: 3px;
  background: ${(props) => props.color ?? "#bf644e"};
  width: ${(props) => props.width || 0}%;
`;

interface Props {
  color?: string;
}

const ScrollIndicator = ({ color }: Props) => {
  const [progressWidth, setProgressWidth] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgressWidth(scrolled);
    };
  }, []);

  return (
    <>
      <ProgressContainer>
        <ProgressBar width={progressWidth} color={color} />
      </ProgressContainer>
    </>
  );
};

export default ScrollIndicator;
