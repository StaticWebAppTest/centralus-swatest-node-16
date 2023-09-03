module.exports = async function (context, req) {
  const date = "2023-09-03T08:09:55.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

