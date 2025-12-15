module.exports = async function (context, req) {
  const date = "2025-12-15T13:35:58.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

