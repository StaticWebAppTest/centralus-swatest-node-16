module.exports = async function (context, req) {
  const date = "2023-09-18T02:15:35.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

