module.exports = async function (context, req) {
  const date = "2022-08-19T06:16:17.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

