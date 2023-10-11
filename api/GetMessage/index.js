module.exports = async function (context, req) {
  const date = "2023-10-11T11:07:41.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

