module.exports = async function (context, req) {
  const date = "2025-01-05T01:01:57.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

