module.exports = async function (context, req) {
  const date = "2024-04-05T19:08:58.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

