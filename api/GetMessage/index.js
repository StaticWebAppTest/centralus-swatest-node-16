module.exports = async function (context, req) {
  const date = "2022-05-14T06:31:22.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

