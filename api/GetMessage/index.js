module.exports = async function (context, req) {
  const date = "2022-07-24T04:26:33.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

