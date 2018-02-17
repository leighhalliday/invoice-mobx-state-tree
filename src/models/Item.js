import { types, getParent } from "mobx-state-tree";

const Item = types
  .model("Item", {
    quantity: types.number,
    price: types.number,
    name: types.string
  })
  .actions(self => ({
    increment() {
      self.quantity = self.quantity + 1;
    },
    decrement() {
      self.quantity = self.quantity - 1;
    },
    remove() {
      // 1 up is items array, 2 up is the ItemList
      getParent(self, 2).remove(self);
    }
  }))
  .views(self => ({
    total() {
      return self.quantity * self.price;
    }
  }));

export default Item;
