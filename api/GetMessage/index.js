module.exports = async function (context, req) {
  const date = "2025-12-01T05:22:22.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

