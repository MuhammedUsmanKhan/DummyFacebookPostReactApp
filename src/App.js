import logo from './logo.svg';
import './App.css';

const FacebookPost = (props) => {
  return (
    <div className="bg-white p-4 m-4 border rounded-md shadow-md">
      {/* Post Header */}
      <div className="flex items-center">
        <img
          src={props.profImage}
          alt="User Avatar"
          className="w-20  rounded-full mr-2"
        />
        <div>
          <p className="font-semibold">{props.name}</p>
          <p className="text-gray-600 text-sm">{props.time}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        urna eget justo vestibulum fermentum a nec purus. Fusce viverra nisl at
        velit fringilla, in interdum felis bibendum. Sed eu justo id nibh
        volutpat volutpat. Ut lacinia tellus nec justo eleifend, vel feugiat
        arcu gravida.
      </p>

      {/* Post Image */}
      <img
        src={props.Image}
        alt="Post Image"
        className="w-full rounded-lg"
      />

      {/* Like, Comment, and Share */}
      <div className="flex justify-between mt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <i className="far fa-thumbs-up text-blue-500"></i>
            <p className="ml-2">Like</p>
          </div>
          <div className="flex items-center">
            <i className="far fa-comment text-gray-600"></i>
            <p className="ml-2">Comment</p>
          </div>
          <div className="flex items-center">
            <i className="far fa-share-square text-gray-600"></i>
            <p className="ml-2">Share</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="far fa-bookmark text-gray-600"></i>
        </div>
      </div>
    </div>
  );
};

export default FacebookPost;
