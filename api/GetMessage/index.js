module.exports = async function (context, req) {
  const date = "2022-03-24T21:10:01.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

