module.exports = async function (context, req) {
  const date = "2023-11-24T10:10:14.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

