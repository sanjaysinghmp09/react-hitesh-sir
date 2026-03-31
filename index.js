function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example usage:
function search(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 1000);

// Simulate typing
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hell");
debouncedSearch("hello"); // Only this will run after 1 sec