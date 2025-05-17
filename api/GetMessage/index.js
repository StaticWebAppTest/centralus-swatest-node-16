module.exports = async function (context, req) {
  const date = "2025-05-17T09:12:41.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

