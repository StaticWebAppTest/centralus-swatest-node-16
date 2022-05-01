module.exports = async function (context, req) {
  const date = "2022-05-01T08:13:16.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

