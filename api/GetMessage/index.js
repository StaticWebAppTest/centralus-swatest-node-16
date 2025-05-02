module.exports = async function (context, req) {
  const date = "2025-05-02T23:12:26.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

