module.exports = async function (context, req) {
  const date = "2022-06-24T12:21:10.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

