module.exports = async function (context, req) {
  const date = "2022-05-13T06:17:29.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

