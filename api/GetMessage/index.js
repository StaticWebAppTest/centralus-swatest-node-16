module.exports = async function (context, req) {
  const date = "2022-06-20T22:09:52.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

