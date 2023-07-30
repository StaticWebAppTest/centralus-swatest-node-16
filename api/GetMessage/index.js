module.exports = async function (context, req) {
  const date = "2023-07-30T17:06:58.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

