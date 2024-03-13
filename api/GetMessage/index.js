module.exports = async function (context, req) {
  const date = "2024-03-13T20:09:02.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

