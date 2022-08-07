module.exports = async function (context, req) {
  const date = "2022-08-07T04:18:13.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

