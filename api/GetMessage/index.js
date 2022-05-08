module.exports = async function (context, req) {
  const date = "2022-05-08T16:13:49.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

