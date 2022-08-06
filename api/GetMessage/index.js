module.exports = async function (context, req) {
  const date = "2022-08-06T15:10:25.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

