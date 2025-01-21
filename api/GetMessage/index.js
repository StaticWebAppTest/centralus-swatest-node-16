module.exports = async function (context, req) {
  const date = "2025-01-21T23:10:49.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

