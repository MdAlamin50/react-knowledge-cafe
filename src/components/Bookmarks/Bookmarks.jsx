import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-lg">
        <div className="bg-[#a99cf4] rounded-lg p-2">
            <h3 className="text-4xl text-center mb-4 font-medium text-[#5537ff]">Reading Time:{readingTime}</h3>
        </div>
      <h2 className="text-3xl text-center font-bold">
        Bookmarked Blogs:{bookmarks.length}
      </h2>
      {bookmarks.map((bookmark , idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime:PropTypes.number
};
export default Bookmarks;
