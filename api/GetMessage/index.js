module.exports = async function (context, req) {
  const date = "2024-01-20T17:08:05.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

