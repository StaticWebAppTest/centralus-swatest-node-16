module.exports = async function (context, req) {
  const date = "2023-08-19T04:09:39.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

