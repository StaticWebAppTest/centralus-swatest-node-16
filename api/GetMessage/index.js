module.exports = async function (context, req) {
  const date = "2025-01-27T18:15:49.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

