module.exports = async function (context, req) {
  const date = "2022-07-17T10:10:39.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

