module.exports = async function (context, req) {
  const date = "2024-01-05T19:07:26.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

