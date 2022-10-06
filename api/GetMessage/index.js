module.exports = async function (context, req) {
  const date = "2022-10-06T20:14:29.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

