import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Reply from "../Reply.vue";

describe(Reply.name, () => {
  it("should render comment without replies", () => {
    const wrapper = mount(Reply, {
      props: {
        reply: {
          id: "1",
          author: { id: "1", nickname: "Jack", avatar: "" },
          content: "Hi there!",
          replies: [],
        },
      },
    });

    expect(wrapper.text()).toMatchInlineSnapshot(`"JackHi there!"`);
  });

  it("should render comment with replies", () => {
    const wrapper = mount(Reply, {
      props: {
        reply: {
          id: "1",
          author: { id: 1, nickname: "Jack", avatar: "" },
          content: "Hi there!",
          replies: [
            {
              id: "2",
              author: {
                id: "2",
                nickname: "Adam",
                avatar: "",
                content: "Hi you!",
                replies: [],
              },
            },
          ],
        },
      },
    });

    expect(wrapper.text()).toMatchInlineSnapshot(`"JackHi there!Show replies"`);
  });
});
