module.exports = async function (context, req) {
  const date = "2025-05-31T01:05:02.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

