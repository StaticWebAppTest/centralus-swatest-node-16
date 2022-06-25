module.exports = async function (context, req) {
  const date = "2022-06-25T23:09:42.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

