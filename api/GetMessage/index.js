module.exports = async function (context, req) {
  const date = "2022-07-08T06:14:51.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

