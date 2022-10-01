module.exports = async function (context, req) {
  const date = "2022-10-01T22:12:40.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

