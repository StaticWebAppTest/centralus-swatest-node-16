module.exports = async function (context, req) {
  const date = "2022-03-26T22:09:19.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

