import type { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import { api } from "../utils/api";

interface ItemModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ItemModal: FC<ItemModalProps> = ({ setIsModalOpen }) => {
  const [input, setInput] = useState("");

  const utils = api.useContext();
  const addItem = api.item.addItem.useMutation({
    onSuccess: () => {
      utils.item.getItems.invalidate().catch((e) => {
        console.error(e);
      });
    },
  });

  const submitItem = () => {
    addItem.mutate({ name: input });
    setIsModalOpen(false);
  };

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60">
      <div className="space-y-4 border border-solid border-gray-300 p-3">
        <h3 className="text-xl font-medium text-white">Name of Item</h3>
        <input
          autoFocus
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") submitItem();
          }}
          className="w-full rounded-md border border-solid border-gray-300 p-2"
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="rounded-md bg-gray-500 p-2 text-sm text-white transition hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={submitItem}
            className="rounded-md bg-violet-500 p-2 text-sm text-white transition hover:bg-violet-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
