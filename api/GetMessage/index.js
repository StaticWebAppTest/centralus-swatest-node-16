module.exports = async function (context, req) {
  const date = "2022-07-22T17:21:37.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

