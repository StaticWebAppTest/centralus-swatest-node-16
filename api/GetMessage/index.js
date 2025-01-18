module.exports = async function (context, req) {
  const date = "2025-01-18T05:10:26.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

