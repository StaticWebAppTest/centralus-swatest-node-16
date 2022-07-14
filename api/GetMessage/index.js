module.exports = async function (context, req) {
  const date = "2022-07-14T14:12:05.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

