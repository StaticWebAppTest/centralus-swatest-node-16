module.exports = async function (context, req) {
  const date = "2022-08-07T03:18:18.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

