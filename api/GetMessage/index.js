module.exports = async function (context, req) {
  const date = "2025-06-10T10:14:57.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

