module.exports = async function (context, req) {
  const date = "2022-06-20T23:10:17.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

