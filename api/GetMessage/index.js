module.exports = async function (context, req) {
  const date = "2024-09-05T12:20:59.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

