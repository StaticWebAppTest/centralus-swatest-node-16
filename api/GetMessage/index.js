module.exports = async function (context, req) {
  const date = "2022-03-22T09:10:18.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

