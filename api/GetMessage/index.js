module.exports = async function (context, req) {
  const date = "2025-01-21T00:55:26.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

