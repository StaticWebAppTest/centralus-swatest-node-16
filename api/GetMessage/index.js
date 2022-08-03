module.exports = async function (context, req) {
  const date = "2022-08-03T06:13:43.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

