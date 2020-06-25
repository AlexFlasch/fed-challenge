import { useState, useEffect, useCallback } from 'react';

const useDropdown = (listRef, mainRef) => {
  let listEl = listRef.current;
  let mainEl = mainRef.current;

  // make sure the hook captures when the refs change
  // necessary so that the values can be updated
  // after mount, when the refs are actually set
  useEffect(() => {
    listEl = listRef.current;
    mainEl = mainRef.current;
  }, [listRef, mainRef]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(
    openState => {
      if (typeof openState !== 'boolean') {
        // if openState comes in as anything other than a boolean
        // just set the state to the opposite of what it was before
        setIsOpen(!isOpen);
      } else {
        // otherwise respect whatever state the user wishes it to be in
        setIsOpen(openState);
      }
    },
    [isOpen],
  );

  const onOutsideClick = useCallback(
    event => {
      const clickIsOnMain =
        mainEl && (event.target === mainEl || mainEl.contains(event.target));
      const clickIsOnList =
        listEl && (event.target === listEl || listEl.contains(event.target));

      if (!clickIsOnMain && !clickIsOnList && isOpen) {
        toggleOpen(false);
      }
    },
    [isOpen],
  );

  const onEscKeyUp = useCallback(
    event => {
      if (event.keyCode === 27 && isOpen) {
        toggleOpen(false);
      }
    },
    [isOpen],
  );

  // register click event on window to detect user clicking outside of dropdown
  useEffect(() => {
    window.addEventListener('click', onOutsideClick);

    // return function to clean up event listener when dropdown is unmounted
    return () => window.removeEventListener('click', onOutsideClick);
  });

  // register key down event on window to close the dropdown when the user presses esc
  useEffect(() => {
    window.addEventListener('keyup', onEscKeyUp);

    // return function to clean up event listener when dropdown is unmounted
    return () => window.removeEventListener('keyup', onEscKeyUp);
  });

  return [isOpen, toggleOpen];
};

export default useDropdown;
