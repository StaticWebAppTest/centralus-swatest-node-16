module.exports = async function (context, req) {
  const date = "2025-01-04T05:10:52.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

