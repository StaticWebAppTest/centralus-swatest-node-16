module.exports = async function (context, req) {
  const date = "2022-03-20T20:10:03.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

