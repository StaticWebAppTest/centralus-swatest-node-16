module.exports = async function (context, req) {
  const date = "2024-02-05T22:09:17.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

