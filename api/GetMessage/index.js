module.exports = async function (context, req) {
  const date = "2024-11-21T20:13:39.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

