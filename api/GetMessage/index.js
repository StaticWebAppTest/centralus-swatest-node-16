module.exports = async function (context, req) {
  const date = "2025-03-13T09:13:10.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

