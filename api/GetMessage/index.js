module.exports = async function (context, req) {
  const date = "2025-06-13T10:14:50.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

