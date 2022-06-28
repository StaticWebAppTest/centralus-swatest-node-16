module.exports = async function (context, req) {
  const date = "2022-06-28T13:33:58.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

