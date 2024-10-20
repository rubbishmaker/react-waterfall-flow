export default (
  callback?: any,
  options?: Record<string, any>,
) => {
  const ob = new IntersectionObserver(
    async (entries) => {
      const entry = entries?.[0];
      if (entry?.isIntersecting) {
        await callback?.();
        await ob.unobserve(entry?.target);
      }
    },
    {
      threshold: 1,
      ...options,
    },
  );

  return {
    ob,
  };
};
