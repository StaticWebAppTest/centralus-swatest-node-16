module.exports = async function (context, req) {
  const date = "2022-08-19T22:12:16.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

