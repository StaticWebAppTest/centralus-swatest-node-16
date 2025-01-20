module.exports = async function (context, req) {
  const date = "2025-01-20T14:11:06.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

