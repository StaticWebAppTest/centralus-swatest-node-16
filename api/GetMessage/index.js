module.exports = async function (context, req) {
  const date = "2024-07-05T19:08:04.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

