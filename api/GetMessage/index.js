module.exports = async function (context, req) {
  const date = "2024-02-20T06:12:15.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

