import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface Props {
  in?: boolean;
  animation?: string;
  timeout?: number;
  children: React.ReactNode;
}

const AnimatedTransition: React.FC<Props> = ({
  in: inProp = true,
  animation = "transition-fade",
  timeout = 200,
  children
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={inProp}
      nodeRef={nodeRef}
      classNames={animation}
      timeout={timeout}
      unmountOnExit
      mountOnEnter
      appear
    >
      <span ref={nodeRef}>{children}</span>
    </CSSTransition>
  );
};

export default AnimatedTransition;
