module.exports = async function (context, req) {
  const date = "2022-05-07T02:28:04.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

