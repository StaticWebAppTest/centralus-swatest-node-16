module.exports = async function (context, req) {
  const date = "2025-03-09T08:13:27.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

