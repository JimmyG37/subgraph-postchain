import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CommentLiked,
  PostCreated,
  RepliedToPost
} from "../generated/PostChain/PostChain"

export function createCommentLikedEvent(
  user: Address,
  commentId: BigInt,
  postId: BigInt
): CommentLiked {
  let commentLikedEvent = changetype<CommentLiked>(newMockEvent())

  commentLikedEvent.parameters = new Array()

  commentLikedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  commentLikedEvent.parameters.push(
    new ethereum.EventParam(
      "commentId",
      ethereum.Value.fromUnsignedBigInt(commentId)
    )
  )
  commentLikedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )

  return commentLikedEvent
}

export function createPostCreatedEvent(
  creator: Address,
  postId: BigInt,
  likeDeadline: BigInt
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "likeDeadline",
      ethereum.Value.fromUnsignedBigInt(likeDeadline)
    )
  )

  return postCreatedEvent
}

export function createRepliedToPostEvent(
  commenter: Address,
  postId: BigInt,
  commentId: BigInt
): RepliedToPost {
  let repliedToPostEvent = changetype<RepliedToPost>(newMockEvent())

  repliedToPostEvent.parameters = new Array()

  repliedToPostEvent.parameters.push(
    new ethereum.EventParam("commenter", ethereum.Value.fromAddress(commenter))
  )
  repliedToPostEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  repliedToPostEvent.parameters.push(
    new ethereum.EventParam(
      "commentId",
      ethereum.Value.fromUnsignedBigInt(commentId)
    )
  )

  return repliedToPostEvent
}
