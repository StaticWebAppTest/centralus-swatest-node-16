module.exports = async function (context, req) {
  const date = "2025-05-13T11:11:41.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

