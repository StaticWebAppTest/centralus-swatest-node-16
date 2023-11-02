module.exports = async function (context, req) {
  const date = "2023-11-02T01:43:10.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

