module.exports = async function (context, req) {
  const date = "2025-04-16T18:18:10.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

