module.exports = async function (context, req) {
  const date = "2025-01-10T00:59:01.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

