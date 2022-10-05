module.exports = async function (context, req) {
  const date = "2022-10-05T08:17:26.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

