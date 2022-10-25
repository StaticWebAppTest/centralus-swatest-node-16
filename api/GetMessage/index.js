module.exports = async function (context, req) {
  const date = "2022-10-25T13:54:02.997Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

