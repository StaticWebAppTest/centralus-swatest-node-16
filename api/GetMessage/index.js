module.exports = async function (context, req) {
  const date = "2025-05-05T07:13:53.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

