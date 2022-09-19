module.exports = async function (context, req) {
  const date = "2022-09-19T20:13:13.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

