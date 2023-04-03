module.exports = async function (context, req) {
  const date = "2023-04-03T14:08:39.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

