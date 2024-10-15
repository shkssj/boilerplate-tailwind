const useMergeRefs = (...refs: React.Ref<any>[]) => {
  return (node: any) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<any>).current = node;
      }
    });
  };
};

export default useMergeRefs;
