module.exports = async function (context, req) {
  const date = "2022-06-07T20:12:15.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

