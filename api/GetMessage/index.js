module.exports = async function (context, req) {
  const date = "2025-01-29T09:11:59.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

