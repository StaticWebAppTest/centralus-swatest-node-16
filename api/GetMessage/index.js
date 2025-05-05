module.exports = async function (context, req) {
  const date = "2025-05-05T04:17:24.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

