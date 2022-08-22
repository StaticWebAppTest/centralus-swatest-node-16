module.exports = async function (context, req) {
  const date = "2022-08-22T06:16:51.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

