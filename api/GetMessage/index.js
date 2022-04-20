module.exports = async function (context, req) {
  const date = "2022-04-20T07:10:39.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

