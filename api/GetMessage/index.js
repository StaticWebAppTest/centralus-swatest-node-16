module.exports = async function (context, req) {
  const date = "2025-01-07T06:17:33.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

