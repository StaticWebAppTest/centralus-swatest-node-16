module.exports = async function (context, req) {
  const date = "2024-01-19T01:53:51.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

