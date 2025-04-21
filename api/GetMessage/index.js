module.exports = async function (context, req) {
  const date = "2025-04-21T06:18:59.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

