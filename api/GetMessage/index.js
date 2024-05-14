module.exports = async function (context, req) {
  const date = "2024-05-14T11:08:21.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

