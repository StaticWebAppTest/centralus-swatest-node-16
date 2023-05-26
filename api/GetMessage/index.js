module.exports = async function (context, req) {
  const date = "2023-05-26T07:08:45.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

