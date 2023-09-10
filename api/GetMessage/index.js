module.exports = async function (context, req) {
  const date = "2023-09-10T12:14:34.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

