module.exports = async function (context, req) {
  const date = "2022-07-15T16:15:48.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

