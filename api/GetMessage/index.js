module.exports = async function (context, req) {
  const date = "2024-05-29T19:08:09.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

