module.exports = async function (context, req) {
  const date = "2024-05-10T16:12:17.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

