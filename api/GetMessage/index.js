module.exports = async function (context, req) {
  const date = "2025-05-11T07:12:22.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

