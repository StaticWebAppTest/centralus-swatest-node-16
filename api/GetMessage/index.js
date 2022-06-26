module.exports = async function (context, req) {
  const date = "2022-06-26T06:12:17.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

