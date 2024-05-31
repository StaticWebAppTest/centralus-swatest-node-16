module.exports = async function (context, req) {
  const date = "2024-05-31T03:11:23.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

