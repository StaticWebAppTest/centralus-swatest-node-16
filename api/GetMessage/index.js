module.exports = async function (context, req) {
  const date = "2025-02-04T15:12:17.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

