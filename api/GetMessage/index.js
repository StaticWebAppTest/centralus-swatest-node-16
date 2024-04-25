module.exports = async function (context, req) {
  const date = "2024-04-25T07:10:13.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

