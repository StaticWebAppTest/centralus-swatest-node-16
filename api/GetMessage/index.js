module.exports = async function (context, req) {
  const date = "2023-01-06T15:10:14.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

