module.exports = async function (context, req) {
  const date = "2022-04-19T22:10:46.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

