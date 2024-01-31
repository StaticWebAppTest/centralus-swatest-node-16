module.exports = async function (context, req) {
  const date = "2024-01-31T01:41:56.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

