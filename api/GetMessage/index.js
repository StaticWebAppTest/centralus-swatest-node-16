module.exports = async function (context, req) {
  const date = "2025-01-05T16:12:36.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

