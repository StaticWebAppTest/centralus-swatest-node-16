module.exports = async function (context, req) {
  const date = "2024-12-24T06:16:48.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

