module.exports = async function (context, req) {
  const date = "2024-12-17T20:13:22.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

