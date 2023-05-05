module.exports = async function (context, req) {
  const date = "2023-05-05T04:10:37.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

