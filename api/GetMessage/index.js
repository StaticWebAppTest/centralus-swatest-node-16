module.exports = async function (context, req) {
  const date = "2022-08-06T22:09:57.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

