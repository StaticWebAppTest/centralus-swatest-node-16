module.exports = async function (context, req) {
  const date = "2024-10-04T06:16:48.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

