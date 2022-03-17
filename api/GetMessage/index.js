module.exports = async function (context, req) {
  const date = "2022-03-17T04:12:48.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

