module.exports = async function (context, req) {
  const date = "2023-12-18T21:08:10.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

