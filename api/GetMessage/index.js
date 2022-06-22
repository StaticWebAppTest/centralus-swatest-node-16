module.exports = async function (context, req) {
  const date = "2022-06-22T12:21:52.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

