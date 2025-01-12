module.exports = async function (context, req) {
  const date = "2025-01-12T05:11:12.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

