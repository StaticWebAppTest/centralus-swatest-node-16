module.exports = async function (context, req) {
  const date = "2024-12-01T04:17:36.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

