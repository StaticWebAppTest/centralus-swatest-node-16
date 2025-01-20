module.exports = async function (context, req) {
  const date = "2025-01-20T18:15:14.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

