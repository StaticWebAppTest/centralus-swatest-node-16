module.exports = async function (context, req) {
  const date = "2022-08-24T19:10:44.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

