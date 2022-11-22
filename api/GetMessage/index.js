module.exports = async function (context, req) {
  const date = "2022-11-22T15:11:38.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

