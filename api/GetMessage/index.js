module.exports = async function (context, req) {
  const date = "2022-09-19T22:11:28.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

