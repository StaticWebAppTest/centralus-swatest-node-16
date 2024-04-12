module.exports = async function (context, req) {
  const date = "2024-04-12T12:16:16.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

