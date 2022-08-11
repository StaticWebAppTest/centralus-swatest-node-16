module.exports = async function (context, req) {
  const date = "2022-08-11T11:10:01.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

