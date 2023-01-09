module.exports = async function (context, req) {
  const date = "2023-01-09T13:18:28.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

