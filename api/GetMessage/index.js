module.exports = async function (context, req) {
  const date = "2024-07-13T13:11:09.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

