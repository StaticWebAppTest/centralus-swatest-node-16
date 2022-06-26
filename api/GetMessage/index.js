module.exports = async function (context, req) {
  const date = "2022-06-26T01:00:36.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

