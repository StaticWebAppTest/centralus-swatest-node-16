module.exports = async function (context, req) {
  const date = "2025-02-26T18:16:54.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

