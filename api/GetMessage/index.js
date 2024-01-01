module.exports = async function (context, req) {
  const date = "2024-01-01T03:10:41.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

