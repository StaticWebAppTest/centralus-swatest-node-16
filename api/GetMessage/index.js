module.exports = async function (context, req) {
  const date = "2022-07-31T06:12:49.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

