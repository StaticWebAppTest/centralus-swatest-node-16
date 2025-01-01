module.exports = async function (context, req) {
  const date = "2025-01-01T18:15:21.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

