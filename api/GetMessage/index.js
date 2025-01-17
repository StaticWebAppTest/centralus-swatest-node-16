module.exports = async function (context, req) {
  const date = "2025-01-17T18:15:16.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

