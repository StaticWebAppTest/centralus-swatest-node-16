module.exports = async function (context, req) {
  const date = "2022-03-21T23:10:26.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

