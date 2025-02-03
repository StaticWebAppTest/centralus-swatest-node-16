module.exports = async function (context, req) {
  const date = "2025-02-03T04:14:18.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

