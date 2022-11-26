module.exports = async function (context, req) {
  const date = "2022-11-26T18:11:36.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

