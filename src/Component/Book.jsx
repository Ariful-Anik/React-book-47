const Book = ({ book }) => {
  const { image, bookName, author,tags,category } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6">
      <figure className="bg-gray-400 rounded-lg">
        <img
          src={image}
          className="h-[166px] py-8"
          alt={bookName}
        />
      </figure>
      <div className="card-body">
       <div className="flex justify-center gap-4">
       {
          tags.map(tag =><button className="btn btn-xs bg-green-200 text-green-500">{tag}</button>
          )
        }
       </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By : {author}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
