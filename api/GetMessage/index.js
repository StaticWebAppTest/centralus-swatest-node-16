module.exports = async function (context, req) {
  const date = "2024-01-15T01:56:13.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

