module.exports = async function (context, req) {
  const date = "2025-05-03T08:15:14.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

