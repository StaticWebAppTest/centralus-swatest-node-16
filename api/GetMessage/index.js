module.exports = async function (context, req) {
  const date = "2023-07-11T20:10:23.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

