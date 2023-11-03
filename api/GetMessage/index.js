module.exports = async function (context, req) {
  const date = "2023-11-03T22:08:17.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

