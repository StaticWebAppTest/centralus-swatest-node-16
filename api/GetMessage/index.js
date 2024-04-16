module.exports = async function (context, req) {
  const date = "2024-04-16T04:11:29.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

