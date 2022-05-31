module.exports = async function (context, req) {
  const date = "2022-05-31T22:11:37.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

