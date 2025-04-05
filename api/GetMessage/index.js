module.exports = async function (context, req) {
  const date = "2025-04-05T10:11:36.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

