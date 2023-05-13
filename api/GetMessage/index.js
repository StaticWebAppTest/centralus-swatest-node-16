module.exports = async function (context, req) {
  const date = "2023-05-13T23:08:10.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

