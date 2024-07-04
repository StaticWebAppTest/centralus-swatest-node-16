module.exports = async function (context, req) {
  const date = "2024-07-04T10:10:43.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

