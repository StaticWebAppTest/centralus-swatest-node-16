module.exports = async function (context, req) {
  const date = "2025-01-29T08:15:32.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

