module.exports = async function (context, req) {
  const date = "2025-01-18T21:10:43.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

