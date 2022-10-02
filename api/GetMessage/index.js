module.exports = async function (context, req) {
  const date = "2022-10-02T15:12:42.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

