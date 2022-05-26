module.exports = async function (context, req) {
  const date = "2022-05-26T18:14:26.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

