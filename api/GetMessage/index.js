module.exports = async function (context, req) {
  const date = "2022-09-03T21:10:14.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

