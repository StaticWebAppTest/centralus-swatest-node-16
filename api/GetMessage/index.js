module.exports = async function (context, req) {
  const date = "2023-01-24T16:13:04.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

