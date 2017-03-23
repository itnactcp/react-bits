/**
 * Lists and other things that are almost components
 *
 * @Reference:
 * https://hackernoon.com/10-react-mini-patterns-c1da92f068c5
 */

// Instead of making a separate component for lists I can then generate the results like:
const SearchSuggestions = (props) => {
  // renderSearchSuggestion() behaves as a pseduo SearchSuggestion component
  // keep it self contained and it should be easy to extract later if needed
  const renderSearchSuggestion = listItem => (
    <li key={listItem.id}>{listItem.name} {listItem.id}</li>
  );

  return (
    <ul>
      {props.listItems.map(renderSearchSuggestion)}
    </ul>
  );
};

// If things get more complex or you want to use this component elsewhere,
// you should be able to copy/paste the code out into a new component.
// Don’t prematurely componentize.