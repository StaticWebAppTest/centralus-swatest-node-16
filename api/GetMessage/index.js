module.exports = async function (context, req) {
  const date = "2024-09-03T20:11:56.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

