module.exports = async function (context, req) {
  const date = "2025-05-08T18:18:31.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

