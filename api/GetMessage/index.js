module.exports = async function (context, req) {
  const date = "2025-01-15T14:10:47.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

