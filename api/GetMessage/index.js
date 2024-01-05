module.exports = async function (context, req) {
  const date = "2024-01-05T17:08:35.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

