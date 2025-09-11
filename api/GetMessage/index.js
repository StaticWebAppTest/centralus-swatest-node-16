module.exports = async function (context, req) {
  const date = "2025-09-11T15:12:34.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

