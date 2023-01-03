module.exports = async function (context, req) {
  const date = "2023-01-03T03:10:21.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

