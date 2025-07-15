module.exports = async function (context, req) {
  const date = "2025-07-15T03:25:19.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

