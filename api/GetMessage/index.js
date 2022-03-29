module.exports = async function (context, req) {
  const date = "2022-03-29T12:19:25.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

