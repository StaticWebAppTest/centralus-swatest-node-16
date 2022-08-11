module.exports = async function (context, req) {
  const date = "2022-08-11T02:59:15.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

