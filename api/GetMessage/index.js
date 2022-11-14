module.exports = async function (context, req) {
  const date = "2022-11-14T03:57:32.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

