module.exports = async function (context, req) {
  const date = "2025-08-20T13:25:54.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

