module.exports = async function (context, req) {
  const date = "2025-12-09T05:14:30.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

