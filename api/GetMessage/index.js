module.exports = async function (context, req) {
  const date = "2022-08-27T12:22:52.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

