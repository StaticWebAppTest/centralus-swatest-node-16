module.exports = async function (context, req) {
  const date = "2025-01-15T22:10:16.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

