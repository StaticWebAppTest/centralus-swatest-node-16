module.exports = async function (context, req) {
  const date = "2023-07-01T17:08:08.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

