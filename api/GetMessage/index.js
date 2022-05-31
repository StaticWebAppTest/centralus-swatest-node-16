module.exports = async function (context, req) {
  const date = "2022-05-31T20:13:14.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

