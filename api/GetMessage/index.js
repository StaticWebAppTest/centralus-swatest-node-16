module.exports = async function (context, req) {
  const date = "2023-07-31T20:08:56.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

