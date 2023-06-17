module.exports = async function (context, req) {
  const date = "2023-06-17T21:07:16.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

