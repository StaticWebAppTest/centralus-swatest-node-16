module.exports = async function (context, req) {
  const date = "2022-11-21T17:12:49.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

