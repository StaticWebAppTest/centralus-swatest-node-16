module.exports = async function (context, req) {
  const date = "2024-01-21T01:58:14.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

