module.exports = async function (context, req) {
  const date = "2024-08-08T07:10:16.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

