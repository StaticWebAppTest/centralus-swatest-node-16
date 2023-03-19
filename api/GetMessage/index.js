module.exports = async function (context, req) {
  const date = "2023-03-19T08:11:35.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

