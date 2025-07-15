module.exports = async function (context, req) {
  const date = "2025-07-15T11:12:41.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

