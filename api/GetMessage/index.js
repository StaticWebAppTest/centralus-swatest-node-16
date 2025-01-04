module.exports = async function (context, req) {
  const date = "2025-01-04T23:10:29.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

