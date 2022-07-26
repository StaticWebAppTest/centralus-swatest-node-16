module.exports = async function (context, req) {
  const date = "2022-07-26T17:14:43.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

