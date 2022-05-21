module.exports = async function (context, req) {
  const date = "2022-05-21T17:13:54.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

