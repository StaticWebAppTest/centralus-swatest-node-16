module.exports = async function (context, req) {
  const date = "2024-09-12T19:08:29.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

