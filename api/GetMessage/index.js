module.exports = async function (context, req) {
  const date = "2025-05-17T18:16:42.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

