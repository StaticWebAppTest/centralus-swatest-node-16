module.exports = async function (context, req) {
  const date = "2024-01-24T02:26:05.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

