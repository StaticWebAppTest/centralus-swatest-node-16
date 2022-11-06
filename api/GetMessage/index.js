module.exports = async function (context, req) {
  const date = "2022-11-06T16:15:03.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

