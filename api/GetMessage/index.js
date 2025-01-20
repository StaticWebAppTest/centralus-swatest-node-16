module.exports = async function (context, req) {
  const date = "2025-01-20T08:15:59.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

