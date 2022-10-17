module.exports = async function (context, req) {
  const date = "2022-10-17T23:14:58.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

