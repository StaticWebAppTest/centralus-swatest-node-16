module.exports = async function (context, req) {
  const date = "2025-01-14T05:11:22.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

