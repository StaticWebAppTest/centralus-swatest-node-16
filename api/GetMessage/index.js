module.exports = async function (context, req) {
  const date = "2022-08-06T06:13:10.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

