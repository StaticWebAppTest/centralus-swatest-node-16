module.exports = async function (context, req) {
  const date = "2024-11-05T19:08:39.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

