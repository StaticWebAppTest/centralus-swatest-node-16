module.exports = async function (context, req) {
  const date = "2024-04-29T20:09:48.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

