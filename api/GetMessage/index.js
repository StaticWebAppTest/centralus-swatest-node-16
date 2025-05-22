module.exports = async function (context, req) {
  const date = "2025-05-22T03:07:27.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

