class MessageType {
  static Message = new MessageType("Message");
  static System = new MessageType("System");
  static Image = new MessageType("Image");
  static GPT = new MessageType("GPT");
  static Rate = new MessageType("Rate");
  static Profile_display = new MessageType("Profile_display"); // 添加这行
  static willingness = new MessageType("willingness"); // 添加这行

  constructor(name) {
    this.name = name;
  }
  toString() {
    return `MessageType.${this.name}`;
  }
}

export default MessageType;
