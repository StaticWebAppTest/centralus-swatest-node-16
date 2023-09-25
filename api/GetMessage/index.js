module.exports = async function (context, req) {
  const date = "2023-09-25T02:16:51.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

