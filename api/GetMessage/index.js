module.exports = async function (context, req) {
  const date = "2025-05-07T17:12:09.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

