module.exports = async function (context, req) {
  const date = "2025-05-15T05:14:12.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

