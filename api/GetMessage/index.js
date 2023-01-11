module.exports = async function (context, req) {
  const date = "2023-01-11T16:19:23.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

