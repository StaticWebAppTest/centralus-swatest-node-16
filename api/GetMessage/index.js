module.exports = async function (context, req) {
  const date = "2025-12-30T14:14:41.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

