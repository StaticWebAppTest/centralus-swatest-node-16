module.exports = async function (context, req) {
  const date = "2023-08-21T16:10:34.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

