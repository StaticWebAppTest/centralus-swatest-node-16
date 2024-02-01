module.exports = async function (context, req) {
  const date = "2024-02-01T01:47:12.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

