module.exports = async function (context, req) {
  const date = "2022-03-26T18:11:32.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

