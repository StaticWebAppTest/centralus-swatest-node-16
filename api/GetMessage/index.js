module.exports = async function (context, req) {
  const date = "2022-07-14T12:21:26.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

