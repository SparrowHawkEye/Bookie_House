import React from "react";

const MySingleItem = ({item, handleDelete}) => {
  

  const {_id,name,publisher,author,no_of_page,price,quantity,ISBN} = (item)
  return (
    <>
      <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="font-medium text-gray-800">
              {name}
            </div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap text-green-500">
          <div className="text-left">{publisher}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">
            {author}
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">
            {ISBN}
          </div>
        </td>
        <td className="p-2 whitespace-nowrap text-green-500">
          <div className="text-lg text-center">{no_of_page}</div>
        </td>
        <td className="p-2 whitespace-nowrap text-green-500">
          <div className="text-lg text-center"><small className="mr-1">$</small>{price}</div>
        </td>
        <td className="p-2 whitespace-nowrap text-green-500">
          <div className="text-lg text-center">{quantity}</div>
        </td>
        <td className="p-2 whitespace-nowrap text-green-500">
        <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning inline p-0 bg-white border-0 hover:bg-white"
            >
              <lord-icon
    src="https://cdn.lordicon.com/rivoakkk.json"
    trigger="click"
    style={{"width":"36px","height":"36px"}}>
</lord-icon>
            </button>
        </td>
      </tr>
    </>
  );
};

export default MySingleItem;
