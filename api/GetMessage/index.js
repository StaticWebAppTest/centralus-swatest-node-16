module.exports = async function (context, req) {
  const date = "2024-03-09T12:13:59.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

