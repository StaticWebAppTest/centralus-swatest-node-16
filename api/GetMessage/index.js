module.exports = async function (context, req) {
  const date = "2023-12-19T12:16:50.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

