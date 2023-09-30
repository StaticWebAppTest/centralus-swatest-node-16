module.exports = async function (context, req) {
  const date = "2023-09-30T00:39:44.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

