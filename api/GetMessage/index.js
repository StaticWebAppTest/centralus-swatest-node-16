module.exports = async function (context, req) {
  const date = "2022-12-26T13:13:52.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

