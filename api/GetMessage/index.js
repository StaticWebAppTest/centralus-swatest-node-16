module.exports = async function (context, req) {
  const date = "2022-10-23T16:18:09.361Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

