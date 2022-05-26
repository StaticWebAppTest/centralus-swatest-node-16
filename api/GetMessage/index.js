module.exports = async function (context, req) {
  const date = "2022-05-26T06:14:15.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

