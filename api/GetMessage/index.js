module.exports = async function (context, req) {
  const date = "2022-08-24T22:11:10.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

