import { toast } from "react-toastify";

const getStoredReadList = () => {
  // read-list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredList = (id) => {
  const storedList = getStoredReadList();
  console.log(storedList);

  if (storedList.includes(id)) {
    console.log(id, "Already exist in the read list");
    toast("Already exist in the read list!!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    // ideally trigger toast from the component
    toast("Added to your read list!!");
  }
};

const getStoredWishList = () => {
  // wishlist
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();

  if (storedWishList.includes(id)) {
    console.log(id, "Already exist in the wish list");
    toast("Already exist in the wish list!!");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    // ideally trigger toast from the component
    toast("Added to your wish list!!");
  }
};

export { addToStoredList, addToStoredWishList, getStoredReadList };
