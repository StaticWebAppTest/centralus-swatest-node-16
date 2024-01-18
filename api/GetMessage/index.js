module.exports = async function (context, req) {
  const date = "2024-01-18T01:52:29.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

