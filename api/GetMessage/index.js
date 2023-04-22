module.exports = async function (context, req) {
  const date = "2023-04-22T22:07:57.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

