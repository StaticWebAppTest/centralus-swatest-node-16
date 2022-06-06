module.exports = async function (context, req) {
  const date = "2022-06-06T22:10:59.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

