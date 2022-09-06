module.exports = async function (context, req) {
  const date = "2022-09-06T22:11:34.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

