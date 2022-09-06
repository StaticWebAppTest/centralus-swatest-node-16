module.exports = async function (context, req) {
  const date = "2022-09-06T16:15:17.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

