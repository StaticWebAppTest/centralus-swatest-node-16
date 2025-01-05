module.exports = async function (context, req) {
  const date = "2025-01-05T11:08:39.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

