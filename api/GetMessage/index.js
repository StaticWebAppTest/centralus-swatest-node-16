module.exports = async function (context, req) {
  const date = "2025-09-16T14:13:23.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

