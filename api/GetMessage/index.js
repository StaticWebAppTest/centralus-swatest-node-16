module.exports = async function (context, req) {
  const date = "2022-08-31T17:16:57.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

