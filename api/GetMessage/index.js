module.exports = async function (context, req) {
  const date = "2024-01-16T01:52:55.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

