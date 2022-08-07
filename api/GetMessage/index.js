module.exports = async function (context, req) {
  const date = "2022-08-07T06:13:09.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

