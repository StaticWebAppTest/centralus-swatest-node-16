module.exports = async function (context, req) {
  const date = "2024-01-05T21:08:04.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

