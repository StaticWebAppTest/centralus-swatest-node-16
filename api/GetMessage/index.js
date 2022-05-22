module.exports = async function (context, req) {
  const date = "2022-05-22T02:43:30.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

