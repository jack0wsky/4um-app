import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import type { Comment } from "../../threads";
import CommentsSection from "../CommentsSection.vue";

const mockData: Comment[] = [
  {
    id: "1",
    author: { id: "1", nickname: "Jack", avatar: "" },
    content: "I am pretty sure you are correct",
    replies: [],
  },
];

describe("CommentsSection", () => {
  it("should render empty state", () => {
    const wrapper = mount(CommentsSection, {
      props: {
        comments: [],
      },
    });

    expect(wrapper.text()).toMatchInlineSnapshot(
      `"There are no comments yetComment thread"`,
    );
  });

  it("should render list of comments", () => {
    const wrapper = mount(CommentsSection, {
      props: {
        comments: mockData,
      },
    });

    expect(wrapper.text()).toMatchInlineSnapshot(
      `"JackI am pretty sure you are correct"`,
    );
  });
});
