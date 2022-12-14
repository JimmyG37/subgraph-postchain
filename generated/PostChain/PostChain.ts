// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CommentLiked extends ethereum.Event {
  get params(): CommentLiked__Params {
    return new CommentLiked__Params(this);
  }
}

export class CommentLiked__Params {
  _event: CommentLiked;

  constructor(event: CommentLiked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get commentId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get postId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PostCreated extends ethereum.Event {
  get params(): PostCreated__Params {
    return new PostCreated__Params(this);
  }
}

export class PostCreated__Params {
  _event: PostCreated;

  constructor(event: PostCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get postId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get likeDeadline(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RepliedToPost extends ethereum.Event {
  get params(): RepliedToPost__Params {
    return new RepliedToPost__Params(this);
  }
}

export class RepliedToPost__Params {
  _event: RepliedToPost;

  constructor(event: RepliedToPost) {
    this._event = event;
  }

  get commenter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get postId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get commentId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PostChain__getCommentResultValue0Struct extends ethereum.Tuple {
  get commenter(): Address {
    return this[0].toAddress();
  }

  get postId(): BigInt {
    return this[1].toBigInt();
  }

  get commentId(): BigInt {
    return this[2].toBigInt();
  }

  get comment(): string {
    return this[3].toString();
  }

  get timeCreated(): BigInt {
    return this[4].toBigInt();
  }

  get likes(): BigInt {
    return this[5].toBigInt();
  }

  get hasCommented(): i32 {
    return this[6].toI32();
  }
}

export class PostChain__getPostResultValue0Struct extends ethereum.Tuple {
  get creator(): Address {
    return this[0].toAddress();
  }

  get post(): string {
    return this[1].toString();
  }

  get postId(): BigInt {
    return this[2].toBigInt();
  }

  get dateCreated(): BigInt {
    return this[3].toBigInt();
  }

  get commentDeadline(): BigInt {
    return this[4].toBigInt();
  }

  get likeDeadline(): BigInt {
    return this[5].toBigInt();
  }

  get totalComments(): BigInt {
    return this[6].toBigInt();
  }

  get totalLikes(): BigInt {
    return this[7].toBigInt();
  }
}

export class PostChain__getUserLikeResultValue0Struct extends ethereum.Tuple {
  get liked(): boolean {
    return this[0].toBoolean();
  }

  get postId(): BigInt {
    return this[1].toBigInt();
  }

  get commentId(): BigInt {
    return this[2].toBigInt();
  }
}

export class PostChain extends ethereum.SmartContract {
  static bind(address: Address): PostChain {
    return new PostChain("PostChain", address);
  }

  getComment(commentId: BigInt): PostChain__getCommentResultValue0Struct {
    let result = super.call(
      "getComment",
      "getComment(uint256):((address,uint256,uint256,string,uint256,uint256,uint8))",
      [ethereum.Value.fromUnsignedBigInt(commentId)]
    );

    return changetype<PostChain__getCommentResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getComment(
    commentId: BigInt
  ): ethereum.CallResult<PostChain__getCommentResultValue0Struct> {
    let result = super.tryCall(
      "getComment",
      "getComment(uint256):((address,uint256,uint256,string,uint256,uint256,uint8))",
      [ethereum.Value.fromUnsignedBigInt(commentId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<PostChain__getCommentResultValue0Struct>(value[0].toTuple())
    );
  }

  getPost(postId: BigInt): PostChain__getPostResultValue0Struct {
    let result = super.call(
      "getPost",
      "getPost(uint256):((address,string,uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(postId)]
    );

    return changetype<PostChain__getPostResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getPost(
    postId: BigInt
  ): ethereum.CallResult<PostChain__getPostResultValue0Struct> {
    let result = super.tryCall(
      "getPost",
      "getPost(uint256):((address,string,uint256,uint256,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(postId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<PostChain__getPostResultValue0Struct>(value[0].toTuple())
    );
  }

  getUserLike(
    user: Address,
    postId: BigInt
  ): PostChain__getUserLikeResultValue0Struct {
    let result = super.call(
      "getUserLike",
      "getUserLike(address,uint256):((bool,uint256,uint256))",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(postId)
      ]
    );

    return changetype<PostChain__getUserLikeResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getUserLike(
    user: Address,
    postId: BigInt
  ): ethereum.CallResult<PostChain__getUserLikeResultValue0Struct> {
    let result = super.tryCall(
      "getUserLike",
      "getUserLike(address,uint256):((bool,uint256,uint256))",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(postId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<PostChain__getUserLikeResultValue0Struct>(value[0].toTuple())
    );
  }
}

export class CreatePostCall extends ethereum.Call {
  get inputs(): CreatePostCall__Inputs {
    return new CreatePostCall__Inputs(this);
  }

  get outputs(): CreatePostCall__Outputs {
    return new CreatePostCall__Outputs(this);
  }
}

export class CreatePostCall__Inputs {
  _call: CreatePostCall;

  constructor(call: CreatePostCall) {
    this._call = call;
  }

  get post(): string {
    return this._call.inputValues[0].value.toString();
  }

  get commentDeadline(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get likeDeadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreatePostCall__Outputs {
  _call: CreatePostCall;

  constructor(call: CreatePostCall) {
    this._call = call;
  }
}

export class LikeCommentCall extends ethereum.Call {
  get inputs(): LikeCommentCall__Inputs {
    return new LikeCommentCall__Inputs(this);
  }

  get outputs(): LikeCommentCall__Outputs {
    return new LikeCommentCall__Outputs(this);
  }
}

export class LikeCommentCall__Inputs {
  _call: LikeCommentCall;

  constructor(call: LikeCommentCall) {
    this._call = call;
  }

  get postId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get commentId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class LikeCommentCall__Outputs {
  _call: LikeCommentCall;

  constructor(call: LikeCommentCall) {
    this._call = call;
  }
}

export class ReplyToPostCall extends ethereum.Call {
  get inputs(): ReplyToPostCall__Inputs {
    return new ReplyToPostCall__Inputs(this);
  }

  get outputs(): ReplyToPostCall__Outputs {
    return new ReplyToPostCall__Outputs(this);
  }
}

export class ReplyToPostCall__Inputs {
  _call: ReplyToPostCall;

  constructor(call: ReplyToPostCall) {
    this._call = call;
  }

  get postId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get comment(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ReplyToPostCall__Outputs {
  _call: ReplyToPostCall;

  constructor(call: ReplyToPostCall) {
    this._call = call;
  }
}
