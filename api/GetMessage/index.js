module.exports = async function (context, req) {
  const date = "2024-01-12T01:53:41.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

