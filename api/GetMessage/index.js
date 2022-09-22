module.exports = async function (context, req) {
  const date = "2022-09-22T18:14:52.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

