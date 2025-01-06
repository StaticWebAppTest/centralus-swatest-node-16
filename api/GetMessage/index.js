module.exports = async function (context, req) {
  const date = "2025-01-06T04:14:58.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

