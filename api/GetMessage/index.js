module.exports = async function (context, req) {
  const date = "2022-08-06T21:10:18.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

